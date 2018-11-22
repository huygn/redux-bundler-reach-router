import React from 'react';
import { Link as RouterLink } from '@/lib/reach-router';

const Link = ({
  className = '',
  activeClassName = '',
  getClassName,
  exact = false,
  ...rest
}) => {
  return (
    <RouterLink
      getProps={({ isCurrent, isPartiallyCurrent }) => {
        const isActive = exact ? isCurrent : isPartiallyCurrent;
        const computedClassName =
          typeof getClassName === 'function'
            ? getClassName(isActive)
            : className + ' ' + (isActive ? activeClassName : '');
        return {
          className: computedClassName || '',
        };
      }}
      {...rest}
    />
  );
};

export default Link;
