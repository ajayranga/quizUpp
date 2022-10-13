import { lazyLoad } from 'utils/loadable';
import Loader from '../Loader';

const NavBar = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default NavBar;
