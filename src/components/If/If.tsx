import React from 'react';

interface Props {
  condition: any;
  children?: React.ReactNode;
}

const If = (props: Props) => {
  const { condition, children } = props;
  if (condition) {
    return <>{children}</>;
  }
  return <></>;
};

export default If;
