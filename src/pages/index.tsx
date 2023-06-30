import { Inter } from 'next/font/google';
import Topbar from '@/components/Topbar/Topbar';
import ProblemsTable from '@/components/ProblemsTable/ProblemsTable';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className=" bg-dark-layer-2 min-h-screen">
      <Topbar />

      <h1 className=" text-2xl text-center text-gray-700 dark:text-gray-400 font-medium uppercase mt-10 mb-5">
        &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
      </h1>

      <div className="relative overflow-x-auto mx-auto px-6 pb-10">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto">
          <thead className=" text-xs text-gray-700 uppercase dark:text-gray-400 border-b">
            <tr>
              {['Status', 'Title', 'Difficulty', 'Category', 'Solution'].map(
                (title, index) => (
                  <th
                    key={`th-${index}`}
                    scope="col"
                    className="px-1 py-3 w-0 font-medium"
                  >
                    {title}
                  </th>
                )
              )}
            </tr>
          </thead>

          <ProblemsTable />
        </table>
      </div>
    </main>
  );
}
