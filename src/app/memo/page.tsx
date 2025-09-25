'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { MemoListResponse } from '@/types/memo';

const MemoList = () => {

  const [memo, setMemo] = useState<MemoListResponse[]>()

  // TODO: 나중에 요청 메서드로 나누기
  const fetchData = async () => {
    try {
      const response = await axios.get<MemoListResponse[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/memo`);
      setMemo(response.data);
    } catch (error) {
      console.error('Failed to fetch memos:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="w-full p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Memo</h2>
      <ul className="space-y-4">
        {memo?.map((memo) => (
          <li key={memo.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            <Link href={`/posts/${memo.id}`} className="block hover:bg-gray-50 p-2 rounded">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{memo.title}</h3>
                  <p className="text-gray-600 mt-1">{memo.content}</p>
                </div>
                <span className="text-gray-400 text-sm ml-4 shrink-0">
                  {memo.createdAt.slice(0, 10)}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoList;