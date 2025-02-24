import { useEffect } from "react";
import { motion } from "framer-motion";

import MotionSlideIn from "../components/MotionSlideIn";
import { Link } from "react-router-dom";

export default function Home () {
    useEffect(() => {
        document.body.classList.add('home');
        return () => {
            document.body.classList.remove('home')
        }
    }, [])
    return (
        <>
        <div className="page-content page-content-home">
            <div className="content-left">
                <MotionSlideIn>
                    <h1 className="title-1">So, you want to travel to <br />
                        <span className="fade-in">Space</span>
                    </h1>
                </MotionSlideIn>
                <p className="text-preset-9 fade-in">
                Let's face it: if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we'll give you a truly out of this world experience!
        
                </p>
            </div>
            <Link to="destinations" className="big-round-btn">Explore</Link>
            {/* <motion.button 
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { scale: 0.2 },
                    visible: { scale: 1 },
                  }}
                  exit={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, duration:0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                className="big-round-btn">Explore
            </motion.button> */}
        </div>
        </>
    )
}