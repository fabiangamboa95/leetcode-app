import Link from 'next/link';
import { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import Logout from '../Buttons/Logout';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { authModalAtom } from '@/atoms/authModalAtom';

interface PageProps {}

const Topbar: FC<PageProps> = () => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalAtom);
  const router = useRouter();

  return (
    <nav className=" relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7">
      <div className=" flex w-full items-center justify-between max-w-[1200px] mx-auto">
        <Link href="/" className="h-[22px] flex-1">
          <img src="/logo-full.png" alt="Logo" className="h-full" />
        </Link>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className=" bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
            >
              Premium
            </a>
          </div>

          {user ? (
            <div className="cursor-pointer group relative">
              <img
                src="./avatar.png"
                alt="user profile img"
                className="h-8 w-8 rounded-full"
              />

              <div className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          ) : (
            <Link
              href="/auth"
              onClick={() => {
                setAuthModalState({ isOpen: true, type: 'login' });
              }}
            >
              <button className=" bg-dark-fill-3 py-1 px-2 cursor-pointer rounded ">
                Sign In
              </button>
            </Link>
          )}

          {user && <Logout />}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
