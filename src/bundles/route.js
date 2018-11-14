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
  selectRouteParams: state => dlv(state, 'route.match.params', {}),
  selectRouteIsDefault: state => dlv(state, 'route.match.route.default'),
  doUpdateRoute: ({ location, match }) => ({
    type: 'ROUTE_MATCH_UPDATED',
    payload: match,
  }),
  doNavigate: (path, opt = {}) => ({ store }) => {
    return navigate(path, opt).then(() => {
      opt.replace ? store.doReplaceUrl(path) : store.doUpdateUrl(path);
    });
  },
  // still needs to prevent calls to `doUpdateUrl` and `doReplaceUrl`
};
