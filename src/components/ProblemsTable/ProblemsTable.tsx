import { problems } from '@/mock/problems';
import { FC } from 'react';
import { BsCheckCircle } from 'react-icons/bs';

interface PageProps {}

const ProblemsTable: FC<PageProps> = () => {
  return (
    <tbody className=" text-white">
      {problems.map((problem, index) => (
        <tr
          className={`${index % 2 === 1 ? 'bg-dark-layer-1' : ''}`}
          key={`tr-${index}`}
        >
          <th className=" px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
            <BsCheckCircle fontSize={'18'} width="18" />
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default ProblemsTable;
