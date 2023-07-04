import Topbar from '@/components/Topbar/Topbar';
import ProblemsTable from '@/components/ProblemsTable/ProblemsTable';
import { IoClose } from 'react-icons/io5';
import YouTube from 'react-youtube';
import { problemsYoutubeModalAtom } from '@/atoms/problemsYoutubeModalAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';

export default function Home() {
  const problemYoutubeModal = useRecoilValue(problemsYoutubeModalAtom);
  const setProblemYoutubeModal = useSetRecoilState(problemsYoutubeModalAtom);

  const closeModal = () =>
    setProblemYoutubeModal({ isOpen: false, videoId: '' });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeModal]);

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

        {problemYoutubeModal.isOpen && (
          <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
            <div
              className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"
              onClick={closeModal}
            />
            <div className="w-full z-50 px-6 relative max-w-4xl">
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="w-full relative">
                  <IoClose
                    fontSize="35"
                    className="cursor-pointer absolute -top-16 right-0 text-gray-300"
                    onClick={closeModal}
                  />
                  <YouTube
                    videoId={problemYoutubeModal.videoId}
                    loading="lazy"
                    iframeClassName="w-full min-h-[500px]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
