import { lazyLoad } from 'utils/loadable';
import Loader from '../Loader';

const Footer = lazyLoad(
  () => import('.'),
  (module) => module.default,
  { fallback: <Loader /> }
);

export default Footer;
