import { toastWarn } from '@/helpers/toast';
import { SHA256 } from '@/utils/algorithms/hash';
import CalculateRoundedIcon from '@mui/icons-material/CalculateRounded';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Nonce = () => {
  const [data, setData] = useState({
    blockId: '',
    content: ''
  });

  const [hashed, setHashed] = useState({
    nonce: '',
    hashedContent: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onCalculate = () => {
    const { blockId, content } = data;
    let nonce = 0;
    do {
      nonce++;
      const payload = blockId + content + nonce;
      const hashValue = SHA256(payload);
      if (hashValue.substring(0, 4) == '0000') {
        setHashed({
          nonce,
          hashedContent: hashValue
        });
        break;
      }
    } while (nonce < 1000000);
    if (nonce >= 1000000)
      toastWarn('Cant find nonce value within 1 million steps');
  };
  const isEmpty = data.blockId && data.content;
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
          <Button
            disabled={!isEmpty}
            onClick={onCalculate}
            variant="contained"
            endIcon={<CalculateRoundedIcon />}
          >
            Calculate nonce
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Hash value:
          </Typography>
          <TextField
            disabled
            label=""
            fullWidth
            value={hashed.nonce}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Hashed content:
          </Typography>
          <TextField
            disabled
            label=""
            fullWidth
            value={hashed.hashedContent}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nonce;
