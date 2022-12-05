import { useEffect, useState, type MouseEventHandler } from 'react';

import Link from 'next/link';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <DevelopmentWarningWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </DevelopmentWarningWrapper>
  );
};

const LOCAL_STORAGE_DEV_WARNING_KEY = 'development-warning';

const DevelopmentWarningWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  useEffect(() => {
    setIsWarningVisible(
      localStorage.getItem(LOCAL_STORAGE_DEV_WARNING_KEY) !== 'hidden'
    );
  }, []);

  const handleDisableWarning: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();

    setIsWarningVisible(false);
    localStorage.setItem(LOCAL_STORAGE_DEV_WARNING_KEY, 'hidden');
  };

  if (!isWarningVisible) {
    return <>{children}</>;
  }

  return (
    <>
      <div
        className="top-0 left-0 flex h-10 w-screen cursor-pointer items-center justify-center gap-4 bg-brand-400"
        title="Clique para esconder essa mensagem"
        onClick={handleDisableWarning}
      >
        <span className="font-poppins text-sm font-medium text-white">
          Hatsui ainda está em desenvolvimento, é esperado que aconteça bugs,
          caso você descubra algum conte{' '}
          <Link
            href="https://github.com/hatsuiorg/hatsui/issues"
            target="_blank"
            className="underline"
          >
            clicando aqui
          </Link>
          .
        </span>
      </div>

      {children}
    </>
  );
};

export default Layout;
