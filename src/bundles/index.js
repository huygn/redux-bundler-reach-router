import {
  composeBundles,
  createUrlBundle,
  createCacheBundle,
} from 'redux-bundler';

import cache from '@/utils/cache';
import extraArgs from './extra-args';
import route from './route';
import localize from './localize';

export default composeBundles(
  createUrlBundle(),
  route,
  createCacheBundle(cache.set),
  extraArgs,
  localize,
);
