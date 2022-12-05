import type { InputHTMLAttributes } from 'react';

import UilSearch from '../assets/icons/UilSearch';
import type { Required } from '../types/utils';

type SearchBarProps = Required<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder'
>;

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, ...props }) => {
  return (
    <div
      className="flex items-center gap-4 rounded-lg bg-background-600 p-3"
      {...props}
    >
      <UilSearch color="#696F7D" size={22} />

      <input
        className="bg-transparent text-sm text-white outline-none placeholder:text-txt-900"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
