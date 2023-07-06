import { auth } from '@/firebase/firebase';
import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { FiLogOut } from 'react-icons/fi';

const Logout: React.FC = () => {
  const [signOut] = useSignOut(auth);

  return (
    <button
      className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
      onClick={() => signOut()}
    >
      <FiLogOut />
    </button>
  );
};
export default Logout;
