import React from 'react';
import { Router } from '@/lib/reach-router';
import { connect } from 'redux-bundler-react';

import loadable from '@/utils/loadable';
const Home = loadable(() => import('@/pages/Home'));
const About = loadable(() => import('@/pages/About'));
const NotFound = loadable(() => import('@/pages/NotFound'));

class AppRouter extends React.Component {
  render() {
    return (
      <Router onMatch={this.props.doUpdateRoute}>
        <NotFound default />
        <Home path="/" />
        <About path="/about" />
      </Router>
    );
  }
}

export default connect(
  'doUpdateRoute',
  AppRouter,
);
