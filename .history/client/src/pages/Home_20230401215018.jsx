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
            <motion.div className='home' {...slideAnimation}>

            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Home