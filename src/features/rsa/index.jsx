import React from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import ComputeKeys from './components/compute-keys';
import EncryptDecrypt from './components/encrypt-decrypt';
import TabPanel from './components/tab-panel';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const RSA = () => {
  const [value, setValue] = React.useState(1);

  const handleChangeTab = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }} p={3}>
      <AppBar position="static" style={{ borderRadius: 8 }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Compute keys" {...a11yProps(0)} />
          <Tab label="Encrypt/Decrypt" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <ComputeKeys />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EncryptDecrypt />
      </TabPanel>
    </Box>
  );
};

export default RSA;
