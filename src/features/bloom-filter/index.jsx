import React, { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import BiotechRoundedIcon from '@mui/icons-material/BiotechRounded';
import { FNV1s } from '@/utils/algorithms/FNV1s';
import { Murmur } from '@/utils/algorithms/Murmur';
import { toastWarn } from '@/helpers/toast';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const BloomFilter = () => {
  const [namePerson, setNamePerson] = useState('');
  const [bitList, setBitList] = useState(Array.from(new Array(15), () => 0));
  const [nameList, setNameList] = useState([]);
  const [prevNamePerson, setPrevNamePerson] = useState('');

  const onChange = e => {
    setNamePerson(() => e.target.value);
  };

  const onPress = e => {
    if (e.keyCode === 13) {
      addNameClicked();
    }
  };

  const addNameClicked = () => {
    const h1 = new FNV1s();
    const h2 = new Murmur();
    const newNameList = [...nameList];
    const newBitList = [...bitList];

    newNameList.push(namePerson);
    setPrevNamePerson(namePerson);

    for (let i = 0; i < newNameList.length; i++) {
      const m1 = h1.hash(newNameList[i]) % 15;
      const m2 = h2.hash(newNameList[i]) % 15;
      newBitList[m1] = 1;
      newBitList[m2] = 1;
    }

    setNameList(() => newNameList);
    setBitList(() => newBitList);

    setNamePerson('');
  };

  function checkNameClicked() {
    const h1 = new FNV1s();
    const h2 = new Murmur();
    const n1 = h1.hash(namePerson) % 15;
    const n2 = h2.hash(namePerson) % 15;

    if (bitList[n1] + bitList[n2] == 2)
      toastWarn(`${namePerson} might be included in the list`);
    else toastWarn(`${namePerson} is not in the list`);
  }

  const renderBitlist = () => {
    const h1 = new FNV1s();
    const h2 = new Murmur();
    const n1 = h1.hash(prevNamePerson) % 15;
    const n2 = h2.hash(prevNamePerson) % 15;
    return (
      <Box
        display="flex"
        justifyContent="center"
        style={{
          gap: 4
        }}
      >
        {bitList.map((bit, idx) => (
          <Box
            p={1}
            key={`box${idx}`}
            style={{
              backgroundColor:
                [n1, n2].includes(idx) && prevNamePerson
                  ? '#7971d4'
                  : '#dfe1cb',
              borderRadius: 4
            }}
          >
            <Typography variant="h4" fontWeight="bold" color="second">
              {bit}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Box p={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {renderBitlist()}
        </Grid>
        <Divider variant="fullWidth" />
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Name:
          </Typography>
          <TextField
            required
            id="namePerson"
            name="namePerson"
            label=""
            fullWidth
            value={namePerson}
            onChange={onChange}
            onKeyDown={onPress}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={!namePerson}
            onClick={addNameClicked}
            variant="contained"
            endIcon={<PersonAddAltRoundedIcon />}
          >
            Add
          </Button>
          <Button
            style={{ marginLeft: 16 }}
            disabled={!namePerson}
            onClick={checkNameClicked}
            variant="contained"
            endIcon={<BiotechRoundedIcon />}
          >
            Check
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            List:
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>No.</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nameList.map((name, idx) => (
                  <StyledTableRow key={`name${name}${idx}`}>
                    <StyledTableCell component="th" scope="row">
                      {idx}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {name}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BloomFilter;
