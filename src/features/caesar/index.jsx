import { Caesar as AlgorithmCaesar } from '@/utils/algorithms/Caesar';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Caesar = () => {
  const [data, setData] = useState({
    key: '',
    content: '',
    encryptedVal: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function encryptClicked() {
    const crypto = new AlgorithmCaesar(data.key * 1);
    const encryptedVal = crypto.encrypt(data.content);
    setData(prv => ({ ...prv, encryptedVal }));
  }

  function decryptClicked() {
    const crypto = new AlgorithmCaesar(data.key * 1);
    const content = crypto.decrypt(data.encryptedVal);
    setData(prv => ({ ...prv, content }));
  }

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
          <Button onClick={encryptClicked} variant="contained" color="primary">
            Encrypt
          </Button>
          <Button
            style={{ marginLeft: 16 }}
            onClick={decryptClicked}
            variant="contained"
            color="secondary"
          >
            Decrypt
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Encrypted value:
          </Typography>
          <TextField
            disabled
            id="encryptedVal"
            name="encryptedVal"
            label=""
            fullWidth
            value={data.encryptedVal}
            autoComplete="given-name"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Caesar;
