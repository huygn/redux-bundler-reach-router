import React from 'react';
import { hot } from 'react-hot-loader';
import Link from '@/components/Link';
import Router from './Router';

const navItems = [
  { url: '/', label: 'Home' },
  { url: '/about', label: 'About' },
  { url: '/xyz', label: 'xyz' },
];

const App = () => {
  return (
    <main>
      <nav className="p-3 mb-4">
        <ul className="list-reset text-center">
          {navItems.map(item => {
            return (
              <li key={item.url} className="inline-block">
                <Link
                  to={item.url}
                  className="no-underline inline-block mr-1 p-2 text-blue hover:text-blue-darker "
                  activeClassName="bg-blue-lighter"
                  partial={false}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Router />
    </main>
  );
};

export default hot(module)(App);
