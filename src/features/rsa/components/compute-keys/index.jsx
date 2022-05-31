import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { RSA } from '@/utils/algorithms/rsa';

const ComputeKeys = () => {
  const [data, setData] = useState({
    p: '',
    q: '',
    privateKey: '',
    publicKey: '',
    originalMessage: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onPress = e => {
    if (e.keyCode === 13 && data.q && data.p) {
      onCalculate();
    }
  };

  const onCalculate = () => {
    const rsa = new RSA(data.p, data.q);
    rsa.computeKeys();
    setData(prev => ({
      ...prev,
      privateKey: rsa.sk,
      publicKey: rsa.pk
    }));
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            P:
          </Typography>
          <TextField
            required
            id="p"
            name="p"
            label=""
            fullWidth
            value={data.p}
            onChange={onChange}
            onKeyDown={onPress}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Q:
          </Typography>
          <TextField
            required
            id="q"
            name="q"
            label=""
            fullWidth
            value={data.q}
            onChange={onChange}
            onKeyDown={onPress}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={!data.q && !data.q}
            onClick={onCalculate}
            variant="contained"
            color="secondary"
          >
            Compute keys
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Private key:
              </Typography>
              <TextField
                disabled
                value={data.privateKey}
                label=""
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Public key:
              </Typography>
              <TextField
                disabled
                value={data.publicKey}
                label=""
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Original Message:
          </Typography>
          <TextField
            disabled
            label=""
            fullWidth
            value={data.originalMessage}
            multiline
            rows={6}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComputeKeys;
