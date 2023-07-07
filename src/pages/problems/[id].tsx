import Topbar from '@/components/Topbar/Topbar';
import { FC } from 'react';

interface PageProps {}

const ProblemPage: FC<PageProps> = () => {
  return (
    <div>
      <Topbar problemPage />
      {/* <Workspace problem={problem} /> */}
    </div>
  );
};

export default ProblemPage;
