import {
  composeBundlesRaw,
  appTimeBundle,
  asyncCountBundle,
  onlineBundle,
  debugBundle,
  createReactorBundle,
  createCacheBundle,
} from 'redux-bundler';

import cache from '@/utils/cache';
import extraArgs from './extra-args';
import route from './route';
import url from './url';
import localize from './localize';

export default composeBundlesRaw(
  // utility bundles
  appTimeBundle,
  asyncCountBundle,
  onlineBundle,
  debugBundle,
  createReactorBundle(),
  // user-implemented bundles
  createCacheBundle(cache.set),
  extraArgs,
  url,
  route,
  localize,
);
