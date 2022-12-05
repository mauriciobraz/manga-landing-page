import type { MouseEventHandler } from 'react';

import { useRouter } from 'next/router';

import UilBookOpen from '../../assets/icons/UilBookOpen';
import UilNewspaper from '../../assets/icons/UilNewspaper';
import UilRocket from '../../assets/icons/UilRocket';

import { Button, ButtonWithOutline } from '../Buttons';
import SearchBar from '../SearchBar';

import Logo from './components/Logo';
import PageLink from './components/PageLink';

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

const RANDOM_MANGA_NAMES = [
  'BLEACH',
  'ONE PIECE',
  'BLUE LOCK',
  'HUNTER X HUNTER',
  'BOKU NO HERO ACADEMIA',
  'KAGUYA-SAMA: LOVE IS WAR',
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

  return (
    <div className="flex h-20 items-center justify-between px-24">
      <div className="flex select-none items-center gap-8">
        <Logo />

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

      <div className="flex items-center justify-center gap-4">
        <SearchBar
          placeholder={
            RANDOM_MANGA_NAMES[
              Math.floor(Math.random() * RANDOM_MANGA_NAMES.length)
            ]
          }
        />

        <ButtonWithOutline onClick={handleRegisterClick} label="Registrar-se" />
        <Button onClick={handleLoginClick} label="Entrar" />
      </div>
    </div>
  );
};

export default Header;
