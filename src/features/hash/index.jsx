import { Box, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SHA256 } from '@/utils/algorithms/hash';

const Hash = () => {
  const [data, setData] = useState('');

  const onChange = e => {
    setData(e.target.value);
  };

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Content:
          </Typography>
          <TextField
            required
            id="firstName"
            name="firstName"
            label=""
            fullWidth
            multiline
            rows={6}
            value={data}
            onChange={onChange}
            autoComplete="given-name"
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

export default Hash;
