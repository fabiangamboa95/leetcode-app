import { authModalAtom } from '@/atoms/authModalAtom';
import { FC, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/router';

interface Register {}

const Register: FC<Register> = () => {
  const setAuthModalState = useSetRecoilState(authModalAtom);
  const [inputs, seInputs] = useState({
    email: '',
    displayName: '',
    password: '',
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <form
      className=" space-y-6 px-6 pb-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!inputs.email || !inputs.displayName || !inputs.password)
          return alert('Please fill all the fields');
        try {
          const newUser = await createUserWithEmailAndPassword(
            inputs.email,
            inputs.password
          );
          if (!newUser) return;
          router.push('/');
        } catch (error: any) {
          alert(error.message);
        }
      }}
    >
      <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-200"
        >
          Your Email
        </label>
        <input
          onChange={(e) => seInputs({ ...inputs, email: e.target.value })}
          type="email"
          name="email"
          id="email"
          className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-gray-200"
        >
          Display Name
        </label>
        <input
          onChange={(e) => seInputs({ ...inputs, displayName: e.target.value })}
          type="displayName"
          name="displayName"
          id="displayName"
          className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-200"
        >
          Your Password
        </label>
        <input
          onChange={(e) => seInputs({ ...inputs, password: e.target.value })}
          type="password"
          name="password"
          id="password"
          className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="*******"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        {loading ? 'Loading...' : 'Register'}
      </button>

      <div className=" text-sm font-medium text-gray-500">
        Already have an account?{' '}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => setAuthModalState({ isOpen: true, type: 'login' })}
        >
          Log In
        </a>
      </div>
    </form>
  );
};

export default Register;
