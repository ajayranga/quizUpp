import { lazyLoad } from 'utils/loadable';
import Loader from '../Loader';

const Banner = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default Banner;
