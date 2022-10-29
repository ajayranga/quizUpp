import { lazyLoad } from 'utils/loadable';
import Loader from '../Loader';

const QuizSteps = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default QuizSteps;
