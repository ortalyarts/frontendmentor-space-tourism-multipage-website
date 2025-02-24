
import { motion } from "framer-motion";

export default function MotionSlideIn ({children, ...props}) {
    return (
        <motion.div 
            initial={{ opacity:0, x:-100}}
            animate={{ opacity:1, x: 0,}}
            transition={{
                type: "tween",
                ease: "easeOut", duration: 0.2
            }}  
            {...props} >
            {children}
        </motion.div>
    )
}