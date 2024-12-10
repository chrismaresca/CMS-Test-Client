// @todo: fix this

export type Post = {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow any additional string-keyed fields
};

export type PostResponse = {
  // Document Array
  docs: Post[];
  // Metadata
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
};
