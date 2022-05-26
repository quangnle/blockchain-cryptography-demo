import { Box } from '@mui/material';
import React from 'react';
import Block from './components/block';

const MerkleTree = () => {
  return (
    <Box p={3}>
      <div className="merkle__list">
        {['1', '2', '3', '4'].map(e => (
          <Block key={e} />
        ))}
      </div>
    </Box>
  );
};

export default MerkleTree;
