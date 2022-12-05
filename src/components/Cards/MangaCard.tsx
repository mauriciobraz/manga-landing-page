import Image from 'next/image';

interface MangaCardProps {
  authors: string[];
  cover: string;
  title: string;
}

const MangaCard: React.FC<MangaCardProps> = ({ authors, cover, title }) => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-start justify-center gap-2 shadow-lg">
      <Image
        src={cover}
        alt={title}
        width={272}
        height={432}
        className="h-full w-108 rounded-lg border border-background-900 object-cover shadow-lg xl:w-72"
      />

      <div className="w-full">
        <h2 className="truncate text-sm font-semibold text-white">{title}</h2>
        <h3 className="truncate text-xs font-medium text-txt-400">
          {authors.join(', ')}
        </h3>
      </div>
    </div>
  );
};

export type { MangaCardProps };
export default MangaCard;
