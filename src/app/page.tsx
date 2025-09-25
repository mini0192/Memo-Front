'use client'

import GlobalButton from '@/components/GlobalButton';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function Home() {

  const router = useRouter();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // 각 요소 등장 간격
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  } as const;

  return (
    <motion.div
      className="main-container flex flex-col items-center justify-center font-sans text-center p-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1 className="text-5xl font-bold mb-4" variants={item}>
        Think Simply
      </motion.h1>

      <motion.p className="text-xl max-w-2xl mb-8 leading-relaxed" variants={item}>
        Documentation without the complexity
      </motion.p>

      <GlobalButton
        className="py-3 px-8 text-base"
        onClick={() => router.push('/memo/post')}
        variants={item}>
          Take a Memo
      </GlobalButton>
    </motion.div>
  );
}
