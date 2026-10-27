import { randomBytes, pbkdf2Sync, timingSafeEqual } from 'node:crypto'
export function hashPassword(password:string){const salt=randomBytes(16).toString('hex');const hash=pbkdf2Sync(password,salt,210000,32,'sha256').toString('hex');return `${salt}:${hash}`}
export function verifyPassword(password:string,stored:string){const [salt,hash]=stored.split(':');if(!salt||!hash)return false;const check=pbkdf2Sync(password,salt,210000,32,'sha256');const expected=Buffer.from(hash,'hex');return check.length===expected.length&&timingSafeEqual(check,expected)}
