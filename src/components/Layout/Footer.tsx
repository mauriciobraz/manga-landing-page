import Link from 'next/link';

import UilDiscord from '../../assets/icons/UilDiscord';
import UilGitHub from '../../assets/icons/UilGitHub';
import UilInstagram from '../../assets/icons/UilInstagram';
import UilTwitter from '../../assets/icons/UilTwitter';

interface Category {
  title: string;
  pages: {
    title: string;
    path: string;
  }[];
}

const CATEGORIES: Category[] = [
  {
    title: 'Ajuda',
    pages: [
      { title: 'Suporte', path: '/support' },
      { title: 'Status', path: '/status' },
      { title: 'FAQ', path: '/faq' },
    ],
  },
  {
    title: 'Empresa',
    pages: [
      { title: 'Marca', path: '/brand' },
      { title: 'Sobre', path: '/about' },
      { title: 'Blog', path: '/blog' },
    ],
  },
  {
    title: 'Políticas',
    pages: [
      { title: 'Termos de Uso', path: '/terms' },
      { title: 'Privacidade', path: '/privacy' },
      { title: 'Moderação', path: '/moderation' },
      { title: 'Cookies', path: '/cookies' },
    ],
  },
];

const SOCIALS = [
  {
    title: 'Twitter',
    Icon: UilTwitter,
    path: process.env.NEXT_PUBLIC_TWITTER_URL ?? '/404',
  },
  {
    title: 'Instagram',
    Icon: UilInstagram,
    path: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '/404',
  },
  {
    title: 'GitHub',
    Icon: UilGitHub,
    path: process.env.NEXT_PUBLIC_GITHUB_URL ?? '/404',
  },
  {
    title: 'Discord',
    Icon: UilDiscord,
    path: process.env.NEXT_PUBLIC_DISCORD_INVITE ?? '/404',
  },
];

const Footer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-screen items-start justify-between bg-background-300 px-24 py-12">
      <div className="mt-4 flex gap-4">
        {SOCIALS.map(({ title, path, Icon }) => (
          <Link
            href={path}
            key={title}
            target="_blank"
            className="hover:brightness-90"
          >
            <Icon color="#ffffff" size={30} />
          </Link>
        ))}
      </div>

      <div className="flex gap-16">
        {CATEGORIES.map(({ title, pages }) => (
          <div key={title} className="flex flex-col gap-2">
            <h1 className="font-semibold text-brand-400">{title}</h1>

            {pages.map(({ title, path }) => (
              <Link
                key={path}
                href={path}
                className="text-sm text-txt-300 hover:brightness-125"
              >
                {title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
