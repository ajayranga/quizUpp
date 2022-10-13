import { lazyLoad } from 'utils/loadable';
import Loader from '../Loader';

const Paginate = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default Paginate;
