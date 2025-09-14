'use client';

import { motion, MotionProps } from 'framer-motion';

type GlobalButtonProps = MotionProps & {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function GlobalButton({ children, className = '', onClick, ...motionProps }: GlobalButtonProps) {
  return (
    <motion.button
      className={`bg-black rounded-lg text-white flex items-center justify-center font-bold shadow-md ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
