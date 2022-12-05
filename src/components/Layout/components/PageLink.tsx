import { useEffect, useState } from 'react';

import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

import type { BaseSvgIconProps } from '../../../types/svg-types';

interface PageRecord {
  title: string;
  path: string;
  Icon: React.FC<BaseSvgIconProps>;
}

interface PageLinkProps extends PageRecord {
  navigate: NextRouter['push'];
}

const PageLink: React.FC<PageLinkProps> = ({ path, title, navigate, Icon }) => {
  const router = useRouter();
  const [isCurrentPage, setIsCurrentPage] = useState(false);

  useEffect(() => {
    setIsCurrentPage(router.asPath === path);
  }, [path, router.asPath]);

  return (
    <div
      className="flex cursor-pointer items-center gap-2.5 hover:brightness-90"
      onClick={(event) => {
        event.preventDefault();
        navigate(path);
      }}
    >
      <Icon color={isCurrentPage ? '#2695fb' : '#e4e7f0'} size={18} />

      <Link
        href={path}
        className={`text-sm font-medium ${
          isCurrentPage ? 'text-brand-400' : 'text-txt-200'
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default PageLink;
