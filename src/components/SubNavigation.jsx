
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Destination ({items, navClassName, parentPage}){

    return (
        
            <nav >
                <motion.ol
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.05 }, ease: ["easeIn", "easeOut"] },
                      }}
                    className={navClassName}>
                        {items.map((item) => (
                        <motion.li
                            
                            variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                            }}
                            exit={{ opacity: 1, scale: 1 }}
                            transition={{ type: 'tween' }}
                            key={item.name}>
                            <NavLink                                
                                    to={`/${parentPage}/${item.name.replace(/ /g,"-").toLowerCase()}`}className={({ isActive }) =>
                                    isActive ? 'active' : undefined
                                }
                                end
                                >
                                {item.name}
                            </NavLink>
                        </motion.li>
                        ))}

                </motion.ol>
            </nav>
      
    )
}