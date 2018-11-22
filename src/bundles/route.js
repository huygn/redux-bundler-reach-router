import { createSelector } from 'redux-bundler';
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
  selectPathname: createSelector('selectMatch', match =>
    dlv(match, 'uri', window.location.pathname),
  ),
  selectRouteParams: createSelector('selectMatch', match =>
    dlv(match, 'params', {}),
  ),
  selectRouteIsDefault: createSelector('selectMatch', match =>
    dlv(match, 'route.default'),
  ),
  doUpdateRoute: ({ location, match }) => ({
    type: 'ROUTE_MATCH_UPDATED',
    payload: match,
  }),
  doNavigate: (path, opt) => () => {
    return navigate(path, opt);
  },
  doUpdateUrl: path => () => {
    return navigate(path);
  },
  doReplaceUrl: path => () => {
    return navigate(path, { replace: true });
  },
};
