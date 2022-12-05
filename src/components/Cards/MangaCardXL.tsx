import type { MouseEventHandler } from 'react';
import Image from 'next/image';

interface MangaCardXLProps {
  cover: string;
  title: string;
  authors: string[];
  description: string;
  latestChapter?: number;
}

const MangaCardXL: React.FC<MangaCardXLProps> = ({
  cover,
  title,
  authors,
  description,
  latestChapter,
}) => {
  const handleGoToManga: MouseEventHandler<HTMLHeadingElement> = (event) => {
    event.preventDefault();
    alert('Method not implemented.');
  };

  const handleGoToChapter: MouseEventHandler<HTMLHeadingElement> = (event) => {
    event.preventDefault();
    alert('Method not implemented.');
  };

  return (
    <div className="flex w-full rounded-lg bg-background-600 p-3">
      <Image
        src={cover}
        alt={title}
        width={96}
        height={122}
        onClick={handleGoToManga}
        className="h-fit w-20 cursor-pointer rounded-lg border border-background-900 object-cover shadow-lg md:w-24"
      />

      <div className="flex w-full flex-col gap-2 py-1 px-2 md:py-2 md:px-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start justify-center">
            <h2
              className="cursor-pointer text-sm font-semibold text-white line-clamp-1 lg:text-base"
              onClick={handleGoToManga}
            >
              {title}
            </h2>

            <h3 className="text-xs font-medium text-txt-400 line-clamp-1">
              {authors.join(', ')}
            </h3>
          </div>

          {latestChapter && (
            <span
              className="hidden cursor-pointer flex-row text-sm font-bold text-brand-400 md:flex"
              onClick={handleGoToChapter}
            >
              Capítulo {latestChapter}
            </span>
          )}
        </div>

        <p className="text-xs text-txt-400 line-clamp-4 md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export type { MangaCardXLProps };
export default MangaCardXL;
