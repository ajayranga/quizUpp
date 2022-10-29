import { lazyLoad } from 'utils/loadable';
import Loader from '../Loader';

const Question = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default Question;
