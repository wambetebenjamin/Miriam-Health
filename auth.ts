import NextAuth, {CredentialsSignin} from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { kv } from '@vercel/kv'
import { verifyPassword } from '@/lib/password'
import {verifyCaptcha} from '@/lib/security'
class CaptchaRequired extends CredentialsSignin {code='CAPTCHA_V2_REQUIRED'}
const hasGoogle=Boolean(process.env.GOOGLE_CLIENT_ID&&process.env.GOOGLE_CLIENT_SECRET)
export const {handlers,auth,signIn,signOut}=NextAuth({
 providers:[...(hasGoogle?[Google({clientId:process.env.GOOGLE_CLIENT_ID!,clientSecret:process.env.GOOGLE_CLIENT_SECRET!})]:[]),Credentials({name:'Email and password',credentials:{email:{label:'Email',type:'email'},password:{label:'Password',type:'password'},captchaToken:{label:'Security token',type:'text'},captchaVersion:{label:'Security version',type:'text'}},async authorize(credentials){const captcha=await verifyCaptcha(credentials?.captchaToken,credentials?.captchaVersion,'login');if(!captcha.ok){if(captcha.code==='CAPTCHA_V2_REQUIRED')throw new CaptchaRequired();return null}if(!process.env.KV_REST_API_URL||!process.env.KV_REST_API_TOKEN)return null;const email=String(credentials?.email||'').toLowerCase().trim();const password=String(credentials?.password||'');const user=await kv.get<{id:string,name:string,email:string,passwordHash:string}>(`miriam:user:${email}`);if(!user||!verifyPassword(password,user.passwordHash))return null;return {id:user.id,name:user.name,email:user.email}}})],
 secret:process.env.NEXTAUTH_SECRET||(process.env.NODE_ENV==='development'?'miriam-health-local-development-secret-change-before-deploy':undefined),session:{strategy:'jwt'},pages:{signIn:'/login'},trustHost:true,
 callbacks:{async session({session,token}){if(session.user&&token.sub)Object.assign(session.user,{id:token.sub});return session}}
})
