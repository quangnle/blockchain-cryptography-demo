import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const HelloWorld = ({ title }) => (
  <div
    className="hello-world"
    a="asda"
    as="asda"
    aas="asda"
    aq="asda"
    aa="asda"
    aqw="asda"
  >
    {title}
  </div>
);

HelloWorld.propTypes = {
  title: PropTypes.string
};

export default HelloWorld;
