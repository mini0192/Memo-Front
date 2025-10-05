export type MemoListResponse = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type MemoResponse = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type MemoSaveRequest = {
  title: string;
  content: string;
}