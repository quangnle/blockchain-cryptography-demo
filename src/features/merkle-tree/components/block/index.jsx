import GavelRoundedIcon from '@mui/icons-material/GavelRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Paper,
  TextField
} from '@mui/material';
import React, { useState } from 'react';

const Block = () => {
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
    <Paper variant="outlined" elevation={5} className="merkle__block-item">
      <Box p={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="blockId"
              name="blockId"
              label="Block"
              fullWidth
              value={data.blockId}
              onChange={onChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TagRoundedIcon color="secondary" />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="nonce"
              name="nonce"
              label="Nonce"
              fullWidth
              value={data.blockId}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="data"
              name="data"
              label="Data"
              fullWidth
              multiline
              rows={6}
              value={data.content}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled
              id="prevHash"
              name="prevHash"
              label="Prev"
              fullWidth
              // value={data ? SHA256(data) : ''}
              autoComplete="given-name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              disabled
              id="hash"
              name="hash"
              label="Hash"
              fullWidth
              // value={data ? SHA256(data) : ''}
              autoComplete="given-name"
              variant="outlined"
              // InputProps={{
              //   className: classes.disabledInput
              // }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              // onClick={onCalculate}
              variant="contained"
              endIcon={<GavelRoundedIcon />}
            >
              Mine
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Block;
