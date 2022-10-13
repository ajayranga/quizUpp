import { lazyLoad } from 'utils/loadable';
import Loader from 'app/components/Loader';

const Preview = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default Preview;
