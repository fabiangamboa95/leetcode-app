import Link from 'next/link';
import { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-12 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" className="h-full" alt="LeetClone" />
      </Link>
      <div className="flex items-center">
        <button className=" bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent transition duration-300 ease-in-out">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
