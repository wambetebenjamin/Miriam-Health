'use client'
import {motion,useReducedMotion} from 'framer-motion'
export default function HeroTitle({children}:{children:React.ReactNode}){const reduce=useReducedMotion();return <motion.h1 initial={reduce?false:{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:1.1,ease:'easeOut'}}>{children}</motion.h1>}
