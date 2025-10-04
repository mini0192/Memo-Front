"use client";

import { useRouter } from "next/navigation";

export default function MemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return { children };
}
