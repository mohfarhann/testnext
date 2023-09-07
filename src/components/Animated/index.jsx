"use client"

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const AnimatedDiv = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = document.getElementById('target-div'); // Ganti dengan ID div target Anda

      if (element && scrollY + window.innerHeight >= element.offsetTop) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      id="target-div"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
    >

    </motion.div>
  );
};

export default AnimatedDiv;
