import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,

} from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.showHome && (
            <motion.section className="" {...slideAnimation('left')}>
                <motion.header>
                    <img 
                    src=''
                    alt='logo'
                    className='w-8 h-8 object-contain'
                    />
                </motion.header>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home