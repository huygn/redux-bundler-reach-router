import dlv from 'dlv';
import { navigate } from '@/lib/reach-router';

const initialState = {
  match: null,
};

export default {
  name: 'route',
  getReducer: () => {
    return (state = initialState, { type, payload }) => {
      if (type === 'ROUTE_MATCH_UPDATED') {
        return Object.assign({}, state, { match: payload });
      }
      return state;
    };
  },
  selectMatch: state => state.route.match,
  selectPathname: state => window.location.pathname,
  selectRouteParams: state => dlv(state, 'route.match.params', {}),
  selectRouteIsDefault: state => dlv(state, 'route.match.route.default'),
  doUpdateRoute: ({ location, match }) => ({
    type: 'ROUTE_MATCH_UPDATED',
    payload: match,
  }),
  doUpdateUrl: path => ({ dispatch }) => {
    return navigate(path);
  },
  doReplaceUrl: path => ({ dispatch }) => {
    return navigate(path, { replace: true });
  },
};

// needs to cover redux-bundler's default selectors, ie:
// selectUrlRaw(): returns contents of reducer.
// selectUrlObject(): returns an object like what would come from new URL() but as a plain object.
// selectQueryObject(): returns query string as an object
// selectQueryString(): returns query string as a string
// selectPathname(): returns pathname, without hash or query
// selectHash(): returns hash value as string
// selectHashObject(): returns hash value as object (if relevant)
// selectHostname(): returns hostname as string.
// selectSubdomains(): returns array of subdomains, if relevant.
