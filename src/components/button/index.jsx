import React from 'react';

const getBtnStringType = props => {
  const { primary, danger, warning } = props;

  switch (true) {
    case primary:
      return 'primary';
    case danger:
      return 'danger';
    case warning:
      return 'warning';
    default:
      return 'default';
  }
};

const Button = ({ primary, danger, warning, children, ...others }) => {
  const btnClass = [getBtnStringType({ primary, danger, warning })].join(' ');

  return (
    <button className={`btn btn-${btnClass}`} {...others}>
      {children}
    </button>
  );
};

export default Button;
