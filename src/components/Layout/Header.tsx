import type { MouseEventHandler } from 'react';

import { useRouter } from 'next/router';

import UilAlignJustify from '../../assets/icons/UilAlignJustify';
import UilBookOpen from '../../assets/icons/UilBookOpen';
import UilNewspaper from '../../assets/icons/UilNewspaper';
import UilRocket from '../../assets/icons/UilRocket';

import Button from '../Buttons';
import OutlineButton from '../Buttons/OutlineButton';
import SearchBar from '../SearchBar';
import Logo from './components/Logo';
import PageLink from './components/PageLink';

import { RANDOM_MANGA_NAMES } from '../../data/manga';

interface PageRecord {
  title: string;
  path: string;
  Icon: React.FC;
}

const PAGES_RECORDS: PageRecord[] = [
  { path: '/', title: 'Navegar', Icon: UilRocket },
  { path: '/blog', title: 'Blog', Icon: UilNewspaper },
  { path: '/library', title: 'Biblioteca', Icon: UilBookOpen },
];

const Header: React.FC = () => {
  const { push: navigate } = useRouter();

  const handleLoginClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    alert('Not implemented yet');
  };

  const handleRegisterClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    alert('Not implemented yet');
  };

  const handleMobileMenuClick: MouseEventHandler<SVGSVGElement> = (event) => {
    event.preventDefault();
    alert('Not implemented yet');
  };

  return (
    <div className="flex h-20 items-center justify-between px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="flex w-full select-none items-center justify-between gap-8 md:justify-start">
        <Logo />

        <div className="hidden gap-8 lg:flex">
          {PAGES_RECORDS.map(({ path, title, Icon }) => (
            <PageLink
              key={path}
              path={path}
              title={title}
              navigate={navigate}
              Icon={Icon}
            />
          ))}
        </div>

        <UilAlignJustify
          color="#ffffff"
          size={30}
          className="flex md:hidden"
          onClick={handleMobileMenuClick}
        />
      </div>

      <div className="hidden items-center justify-center gap-4 md:flex">
        <SearchBar
          placeholder={
            RANDOM_MANGA_NAMES[
              Math.floor(Math.random() * RANDOM_MANGA_NAMES.length)
            ]
          }
        />

        <OutlineButton onClick={handleRegisterClick} label="Registrar" />
        <Button onClick={handleLoginClick} label="Entrar" />
      </div>
    </div>
  );
};

export default Header;
