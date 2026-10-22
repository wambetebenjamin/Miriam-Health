import { z } from 'zod'
export async function verifyCaptcha(token:unknown,version:unknown='v3',expectedAction?:string){
 if(typeof token!=='string'||!token) return {ok:false as const,status:400,message:'Please complete the security check.',code:'CAPTCHA_REQUIRED'}
 const secret=version==='v2'?process.env.RECAPTCHA_V2_SECRET_KEY:process.env.RECAPTCHA_SECRET_KEY
 if(!secret) return {ok:false as const,status:503,message:'Security verification is not configured yet.',code:'CAPTCHA_NOT_CONFIGURED'}
 try{const body=new URLSearchParams({secret,response:token});const response=await fetch('https://www.google.com/recaptcha/api/siteverify',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body,cache:'no-store'});const result=await response.json();if(!result.success)return {ok:false as const,status:400,message:'Security verification could not be completed.',code:'CAPTCHA_FAILED'};if(version!=='v2'&&expectedAction&&result.action!==expectedAction)return {ok:false as const,status:400,message:'Security verification could not be completed.',code:'CAPTCHA_ACTION_MISMATCH'};if(typeof result.score==='number'&&result.score<.5)return {ok:false as const,status:403,message:'Please complete the additional security check to continue.',code:'CAPTCHA_V2_REQUIRED',fallback:'visible'};return {ok:true as const}}catch{return {ok:false as const,status:503,message:'Security verification is temporarily unavailable.',code:'CAPTCHA_UNAVAILABLE'}}
}
export const emailSchema=z.string().email().max(254)
export const countySchema=z.string().min(2).max(80)
export const profileSchema=z.object({name:z.string().min(2).max(100),phone:z.string().min(7).max(24),county:countySchema,bloodType:z.string().max(4).optional(),emergencyName:z.string().max(100).optional(),emergencyPhone:z.string().max(24).optional(),appointmentReminders:z.boolean().optional(),weeklyDigest:z.boolean().optional(),healthConsent:z.boolean().refine(v=>v===true,'Explicit consent is required.')})
export async function jsonError(message:string,status=400,extra:Record<string,unknown>={}){return Response.json({error:message,...extra},{status})}
