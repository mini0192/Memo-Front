'use client';

import SimpleEditor from '@/components/Editor';
import GlobalButton from '@/components/GlobalButton';
import { MemoSaveRequest } from '@/types/memo';
import axios from 'axios';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const MemoPost = () => {

  const { register, handleSubmit, control } = useForm<MemoSaveRequest>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = async (data: MemoSaveRequest) => {
    try {
      const response = await axios.post<MemoSaveRequest>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/memo`,
        data
      );
      console.log(response);
    } catch (error) {
      console.error('Failed to fetch memos:', error);
    }
  }

  return (
    <form
      className="w-full max-w-5xl p-8 overflow-y-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6">
        <input
          type="text"
          placeholder="How are you today?"
          className="w-full text-3xl font-semibold text-gray-900 placeholder-gray-400 focus:outline-none"
          {...register('title')}
        />
      </div>

      <div className="pt-4">
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <SimpleEditor
              onChange={field.onChange}
              value={field.value || ''}
            />
          )}
        />

        <GlobalButton type="submit" className="py-3 px-8 text-base">
            Take a Memo
        </GlobalButton>
      </div>
    </form>
  );
};

export default MemoPost;
