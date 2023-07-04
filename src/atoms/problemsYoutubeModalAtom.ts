import { atom } from 'recoil';

interface ProblemsYoutubeModalState {
  isOpen: boolean;
  videoId: string;
}

const initialProblemsYoutubeModalState: ProblemsYoutubeModalState = {
  isOpen: false,
  videoId: '',
};

export const problemsYoutubeModalAtom = atom<ProblemsYoutubeModalState>({
  key: 'problemsYoutubeModalAtom',
  default: initialProblemsYoutubeModalState,
});
