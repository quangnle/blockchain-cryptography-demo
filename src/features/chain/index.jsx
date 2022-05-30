import { Box } from '@mui/material';
import React from 'react';
import Block from './components/block';

const Chain = () => {
  return (
    <Box p={3}>
      <div className="chain__list">
        {['1', '2', '3', '4'].map(e => (
          <Block key={e} />
        ))}
      </div>
    </Box>
  );
};

export default Chain;
