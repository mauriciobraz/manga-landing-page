import type { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-2xl text-white">
        404 - Página não encontrada, volte para a{' '}
        <Link href="/" className="underline">
          página inicial
        </Link>
      </h1>
    </div>
  );
};

export default NotFound;
