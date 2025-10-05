'use client';

import { use } from 'react'; // React 18+ built-in
import { MemoResponse } from "@/types/memo";
import axios from "axios";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

interface Props {
  params: Promise<{ id: string }>; // 이제 Promise 형태
}

export default function PostPage({ params }: Props) {
  const { id } = use(params); // <- params를 언래핑
  const [memo, setMemo] = useState<MemoResponse>();

  const getData = async (id: string) => {
    try {
      const response = await axios.get<MemoResponse>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/memo/${id}`
      );
      setMemo(response.data);
    } catch (error) {
      console.error('Failed to fetch memos:', error);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div>
      {memo && (
        <div className="border-b border-gray-200 pb-4 last:border-b-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{memo.title}</h3>
              <div
                className="prose mt-1 text-gray-800"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(memo.content) }}
              />
            </div>
            <span className="text-gray-400 text-sm ml-4 shrink-0">
              {memo.createdAt.slice(0, 10)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
