'use client';

import Editor from '@/components/Editor';
import { CreateMemo } from '@/types/memo';
import React from 'react';
import { useForm } from 'react-hook-form';

const RecordPage = () => {

  const { register, handleSubmit, control } = useForm<CreateMemo>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form
      className="w-full max-w-5xl bg-white p-8 overflow-y-auto"
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
        <Editor/>
      </div>
    </form>
  );
};

export default RecordPage;
