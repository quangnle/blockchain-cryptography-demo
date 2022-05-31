import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import React, { useState } from 'react';
import { RSA } from '@/utils/algorithms/rsa';

const ContentPage = () => {
  const [data, setData] = useState({
    p: '',
    q: '',
    privateKey: '',
    publicKey: '',
    originalMsg: '',
    encryptedMsg: ''
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

  function encryptClicked() {
    const rsa = new RSA(data.p, data.q);
    rsa.computeKeys();

    const encryptedMsg = rsa.encrypt(data.originalMsg);
    setData(prev => ({ ...prev, encryptedMsg }));
  }

  function decryptClicked() {
    const rsa = new RSA(data.p, data.q);
    rsa.computeKeys();

    const originalMsg = rsa.decrypt(data.encryptedMsg);

    setData(prev => ({ ...prev, originalMsg }));
  }

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
          <Box display="flex" justifyContent="center">
            <Button
              disabled={!data.q && !data.q}
              onClick={onCalculate}
              variant="contained"
              color="secondary"
              startIcon={<KeyboardDoubleArrowDownRoundedIcon />}
              endIcon={<KeyboardDoubleArrowDownRoundedIcon />}
            >
              Compute keys
            </Button>
          </Box>
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
        <Grid item xs={12}>
          <Divider>Encrypt/Decrypt</Divider>
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

export default ContentPage;
