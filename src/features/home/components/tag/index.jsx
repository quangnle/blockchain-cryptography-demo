import React from 'react';

const HomeTag = ({ color, label }) => {
  return (
    <span
      style={color ? { background: color } : {}}
      className="home-tag label-item info"
    >
      {label}
    </span>
  );
};

export default HomeTag;
