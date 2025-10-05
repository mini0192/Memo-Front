"use client"

import { MemoListResponse } from "@/types/memo"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<MemoListResponse>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
]