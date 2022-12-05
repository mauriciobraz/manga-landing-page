import type { NextPage } from 'next';

import MangaCard from '../components/Cards/MangaCard';
import MangaCardXL from '../components/Cards/MangaCardXL';
import RecommendationsBanner from '../components/RecommendationsBanner';

import { EXPANDED_MANGA_CARDS, VERTICAL_MANGA_CARDS } from '../data/manga';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-start gap-12 px-8 pb-24 md:px-12 lg:px-16 xl:px-24">
      <RecommendationsBanner />
      <WeeklyManga data={VERTICAL_MANGA_CARDS} />
      <RecentlyUpdatedManga data={EXPANDED_MANGA_CARDS} />
    </div>
  );
};

interface WeeklyMangaProps {
  data: typeof VERTICAL_MANGA_CARDS;
}

const WeeklyManga: React.FC<WeeklyMangaProps> = ({ data }) => {
  if (VERTICAL_MANGA_CARDS.length > 8) {
    data = data.slice(0, 8);
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h1 className="text-xl font-bold text-white">Melhores da semana</h1>

      <div className="grid w-full grid-cols-2 justify-between gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {data.map((manga) => (
          <MangaCard
            key={manga.title}
            title={manga.title}
            authors={manga.authors}
            cover={manga.cover}
          />
        ))}
      </div>
    </div>
  );
};

interface RecentlyUpdatedMangaProps {
  data: typeof EXPANDED_MANGA_CARDS;
}

const RecentlyUpdatedManga: React.FC<RecentlyUpdatedMangaProps> = ({
  data,
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h1 className="text-xl font-bold text-white">Atualizados Recentemente</h1>

      <div className="grid w-full grid-cols-1 justify-between gap-4 xl:grid-cols-2">
        {data.map((manga) => (
          <MangaCardXL
            key={manga.title}
            title={manga.title}
            authors={manga.authors}
            cover={manga.cover}
            description={manga.description}
            latestChapter={manga.latestChapter}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
