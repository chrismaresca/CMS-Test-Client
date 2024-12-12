// @todo: fix this

// =========================
// Base Types
// =========================

export type AuthorPayload = {
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  location: string;
  dateCreated: Date;
};

export type TagPayload = {
  name: string;
  slug: string;
};

export type ArticlePayload = {
  id: string;
  title: string;
  content: string;
  slug: string;
  authorId: string;
  brandId: string;
  dateCreated: Date;
  dateUpdated: Date;
  author: AuthorPayload;
  tags: {
    articleId: string;
    tagId: string;
    tag: TagPayload;
  }[];
};

// =========================
// export type ArticlePayloadResponse = {
//   // Document Array
//   docs: ArticlePayload[];
//   // Metadata
//   totalDocs: number;
//   limit: number;
//   totalPages: number;
//   page: number;
//   pagingCounter: number;
//   hasPrevPage: boolean;
//   hasNextPage: boolean;
//   prevPage: number | null;
//   nextPage: number | null;
// };
