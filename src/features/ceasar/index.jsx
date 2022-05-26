import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Ceasar = () => {
  const [data, setData] = useState({
    key: '',
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
            Key:
          </Typography>
          <TextField
            required
            id="key"
            name="key"
            label=""
            fullWidth
            value={data.key}
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
          <Button
            // onClick={onCalculate}
            variant="contained"
            color="primary"
          >
            Encrypt
          </Button>
          <Button
            style={{ marginLeft: 16 }}
            // onClick={onCalculate}
            variant="contained"
            color="secondary"
          >
            Decrypt
          </Button>
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
            // value={data ? SHA256(data) : ''}
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ceasar;
