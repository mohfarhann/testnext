"use client"

import { motion, useAnimation } from 'framer-motion';
import { useEffect,useState } from 'react';

const CountingAnimation = ({ to }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 2000; // Durasi animasi dalam milidetik (2 detik dalam contoh ini)
    const steps = 100; // Jumlah langkah animasi

    const stepValue = Math.ceil(to / steps);
    let currentCount = 0;
    let step = 1;

    const interval = setInterval(() => {
      currentCount += stepValue;

      if (currentCount >= to) {
        currentCount = to;
        clearInterval(interval);
      }

      setCount(currentCount);
    }, animationDuration / steps);

    return () => clearInterval(interval);
  }, [to]);

  return (
    <span className="text-4xl font-bold text-center">
      {count}
    </span>
  );
};

export default CountingAnimation;
