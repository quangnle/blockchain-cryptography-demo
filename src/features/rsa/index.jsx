import React from 'react';
import { AppBar, Box, Tab, Tabs } from '@mui/material';
import TabPanel, { a11yProps } from '@/components/tab-panel';
import ContentPage from './components/content-rsa';

const RSA = () => {
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box xs={{ bgcolor: 'background.paper' }} p={3}>
      <AppBar position="static" style={{ borderRadius: 8 }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="RSA" {...a11yProps(0)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <ContentPage />
      </TabPanel>
    </Box>
  );
};

export default RSA;
