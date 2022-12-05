import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link
      className="cursor-pointer select-none font-poppins text-3xl font-bold text-txt-200 hover:brightness-90"
      href="/"
    >
      hatsui
    </Link>
  );
};

export default Logo;
