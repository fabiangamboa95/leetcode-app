import { problems } from '@/mock/problems';
import Link from 'next/link';
import { FC, useState } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { useSetRecoilState } from 'recoil';
import { problemsYoutubeModalAtom } from '@/atoms/problemsYoutubeModalAtom';

interface PageProps {}

const ProblemsTable: FC<PageProps> = () => {
  const setProblemYoutubeModal = useSetRecoilState(problemsYoutubeModalAtom);

  return (
    <>
      <tbody className=" text-white">
        {problems.map((problem, index) => {
          const difficultyColor =
            problem.difficulty === 'Easy'
              ? 'text-dark-green-s'
              : problem.difficulty === 'Medium'
              ? 'text-yellow-500'
              : 'text-red-500';
          return (
            <tr
              className={`${index % 2 === 1 ? 'bg-dark-layer-1' : ''}`}
              key={`tr-${index}`}
            >
              <th className=" px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                <BsCheckCircle fontSize={'18'} width="18" />
              </th>

              <td className="px-6 py-4">
                <Link
                  className="hover:text-blue-600 cursor-pointer"
                  href={`/problems/${problem.id}`}
                >
                  {problem.title}
                </Link>
              </td>

              <td className={`px-6 py-4 ${difficultyColor}`}>
                {problem.difficulty}
              </td>

              <td className="px-6 py-4">{problem.category}</td>

              <td className="px-6 py-4">
                {problem.videoId ? (
                  <AiFillYoutube
                    fontSize="18"
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setProblemYoutubeModal({
                        isOpen: true,
                        videoId: problem.videoId!,
                      })
                    }
                  />
                ) : (
                  <p className="text-gray-400">Coming Soon</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default ProblemsTable;
