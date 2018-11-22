import {
  composeBundles,
  createUrlBundle,
  createCacheBundle,
} from 'redux-bundler';

import cache from '@/utils/cache';
import extraArgs from './extra-args';
import route from './route';
import url from './url';
import localize from './localize';

export default composeBundles(
  createUrlBundle({ inert: true, handleScrollRestoration: false }),
  url,
  route,
  createCacheBundle(cache.set),
  extraArgs,
  localize,
);
