import { lazyLoad } from 'utils/loadable';
import Loader from 'app/components/Loader';

const Quiz = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default Quiz;
