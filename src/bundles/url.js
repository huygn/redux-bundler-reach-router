// Naive implementation of https://github.com/HenrikJoreteg/redux-bundler/blob/master/src/bundles/create-url-bundle.js

import { createSelector, HAS_WINDOW } from 'redux-bundler';
import qs from 'querystringify';

export const isString = obj =>
  Object.prototype.toString.call(obj) === '[object String]';
const makeSerializable = url => {
  const result = {};
  for (const key in url) {
    const val = url[key];
    if (isString(val)) {
      result[key] = val;
    }
  }
  return result;
};

export const removeLeading = (char, string) =>
  string.charAt(0) === char ? string.slice(1) : string;

export default {
  name: 'url',
  selectUrlRaw: () => ({ url: HAS_WINDOW ? window.location.href : '/' }),
  selectUrlObject: createSelector('selectUrlRaw', urlRaw =>
    makeSerializable(new URL(urlRaw.url)),
  ),
  selectQueryObject: createSelector('selectUrlObject', urlObj =>
    qs.parse(urlObj.search),
  ),
  selectQueryString: createSelector('selectQueryObject', queryObj =>
    qs.stringify(queryObj),
  ),
  selectHash: createSelector('selectUrlObject', urlObj =>
    removeLeading('#', urlObj.hash),
  ),
  selectHashObject: createSelector('selectHash', hash => qs.parse(hash)),
  selectHostname: createSelector('selectUrlObject', urlObj => urlObj.hostname),
};
