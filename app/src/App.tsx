import React, { useState } from "react";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Settings from "./components/Settings";
import LeaderBoard from "./components/LeaderBoard";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "./store";
import { userAdded } from "./store/usersSlice";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.settings.limit);

  const socket = io("http://localhost:3050");

  socket.on("userData", (user) => {
    dispatch(userAdded({ user, limit }));
  });

  return (
    <Container fixed>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="LEADERBOARD" {...a11yProps(0)} />
            <Tab label="SETTINGS" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <LeaderBoard />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Settings />
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default App;
