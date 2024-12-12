import { AuthorPayload } from "@/types/response";


type ArticleHeaderProps = {
  title: string;
  author: AuthorPayload;
  date: Date;
  mainTagName: string;
};

export function ArticleHeader({ title, author, date, mainTagName }: ArticleHeaderProps) {
  return (
    <header className="mb-2 lg:mb-6 not-format">
      <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 lg:mb-8 lg:text-5xl dark:text-white">{title}</h1>
      <div className="flex items-center space-x-3 text-base text-gray-600 dark:text-gray-400">
        <address className="inline font-medium">
          By
          <a rel="author" className="ml-1 text-primary-600 no-underline hover:underline dark:text-primary-500" href="#">
            {author.firstName} {author.lastName}
          </a>
        </address>
        <span>•</span>
        <a href="#" className="font-medium text-primary-600 no-underline hover:underline dark:text-primary-500">
          {mainTagName}
        </a>
        <span>•</span>
        <time className="font-medium" dateTime={new Date(date).toISOString()} title={new Date(date).toLocaleDateString()}>
          {new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </div>
    </header>
  );
}
