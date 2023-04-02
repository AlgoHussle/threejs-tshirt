import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation, } from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img 
                    src='https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png'
                    alt='logo'
                    className='w-8 h-8 object-contain'
                    />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text '>
                            LETS <br className='xl:block hidden' /> DO IT.
                        </h1>
                    </motion.div>
                    <motion.div 
                    {...headContentAnimation}
                    >
                        <p className='max-w-md font-normal text-gray-600 text-base '>
                            Create your own unique & exclusive T-shirt with our
                            brand-new 3D customization tool. <strong>Unleash
                            your creativity 
                            </strong>{""} and define your own style.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home