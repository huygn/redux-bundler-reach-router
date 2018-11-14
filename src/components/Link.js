import React from 'react';
import { connect } from 'redux-bundler-react';
import { Link as RouterLink } from '@/lib/reach-router';

const Link = ({
  className = '',
  activeClassName = '',
  getClassName,
  partial = true,
  doUpdateUrl,
  ...rest
}) => {
  return (
    <RouterLink
      onClick={() => doUpdateUrl(rest.to, { replace: rest.replace || false })}
      getProps={({ isCurrent, isPartiallyCurrent }) => {
        const isActive = partial ? isPartiallyCurrent : isCurrent;
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

export default connect(
  'doUpdateUrl',
  Link,
);
