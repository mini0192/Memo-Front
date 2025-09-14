'use client';

import GlobalButton from '@/components/GlobalButton';
import { useRouter } from 'next/navigation';

export default function MemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto mt-[50px] min-h-[calc(100vh-50px)] flex flex-col">
      
      {/* 컨텐츠 */}
      <div className="flex-1">
        {children}
      </div>

      {/* 항상 하단 버튼 */}
      <div className="mb-6 flex justify-end">
        <GlobalButton
            className="py-3 px-8 text-base"
            onClick={() => router.push('/memo/post')}
        >
                Add Memo
        </GlobalButton>
      </div>
    </div>
  );
}
