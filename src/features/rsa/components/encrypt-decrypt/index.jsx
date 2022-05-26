import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Caesar } from '@/utils/algorithms/Caesar';
const EncryptDecrypt = () => {
  const [data, setData] = useState({
    originalMsg: '',
    encryptedMsg: '',
    key: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  function encryptClicked() {
    const crypto = new Caesar(data.key * 1);
    const encryptedContent = crypto.encrypt(data.originalMsg);
    setData(prev => ({
      ...prev,
      encryptedMsg: encryptedContent
    }));
  }

  function decryptClicked() {
    const crypto = new Caesar(data.key * 1);
    const decryptedContent = crypto.decrypt(data.encryptedMsg);
    setData(prev => ({
      ...prev,
      originalMsg: decryptedContent
    }));
  }

  return (
    <Box sx={{ bgcolor: 'background.paper' }} p={3}>
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
        <Grid item xs={12} md={5}>
          <Typography variant="h6" gutterBottom>
            Original Message:
          </Typography>
          <TextField
            required
            id="originalMsg"
            name="originalMsg"
            label=""
            fullWidth
            multiline
            rows={6}
            value={data.originalMsg}
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Box
            display="flex"
            alignItems="center"
            height="100%"
            width="100%"
            flexWrap="wrap"
          >
            <Button
              style={{ width: '100%', marginTop: 8 }}
              disabled={!data.originalMsg}
              onClick={encryptClicked}
              variant="contained"
              color="primary"
              endIcon={<KeyboardDoubleArrowRightRoundedIcon />}
            >
              Encrypt
            </Button>
            <Button
              style={{ width: '100%', marginTop: 8 }}
              disabled={!data.encryptedMsg}
              onClick={decryptClicked}
              variant="contained"
              color="secondary"
              startIcon={<KeyboardDoubleArrowLeftRoundedIcon />}
            >
              Decrypt
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" gutterBottom>
            Encrypted Message:
          </Typography>
          <TextField
            required
            id="encryptedMsg"
            name="encryptedMsg"
            label=""
            fullWidth
            multiline
            rows={6}
            value={data.encryptedMsg}
            onChange={onChange}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EncryptDecrypt;
