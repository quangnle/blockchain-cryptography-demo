import { SHA256 } from '@/utils/algorithms/hash';
import { Box, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const NonInteractiveZkp = () => {
  const [data, setData] = useState({
    blockId: '',
    content: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Block ID:
          </Typography>
          <TextField
            required
            id="blockId"
            name="blockId"
            label=""
            fullWidth
            value={data.blockId}
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Content:
          </Typography>
          <TextField
            required
            id="content"
            name="content"
            label=""
            fullWidth
            multiline
            rows={6}
            value={data.content}
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Hash value:
          </Typography>
          <TextField
            disabled
            id="firstName"
            name="firstName"
            label=""
            fullWidth
            value={data ? SHA256(data) : ''}
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NonInteractiveZkp;
