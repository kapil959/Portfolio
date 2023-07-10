import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useAppSelector, getUsersData } from "../store";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemText } from "@mui/material";
import WorkExBody from "./workExBody";
import { IconButton, Container, Button } from "@mui/material";

import "./workex.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function WorkEx({ mobileView }) {
  const [value, setValue] = React.useState(0);
  const { work } = useAppSelector(getUsersData);
  const handleChange = (event, newValue) => {
    console.log(event);
    setValue(newValue);
  };
  const tabWorks = () => {
    return work.map((workexp) => {
      return (
        <Tab
          id="TabButton"
          className="TabButton"
          label={workexp.name}
          workex={workexp}
        />
      );
    });
  };
  const tabBody = () => {
    return work.map((workexp, idx) => {
      return (
        <TabPanel className="tabPanel" value={value} index={idx}>
          <WorkExBody work={workexp} />
        </TabPanel>
      );
    });
  };
  return (
    <section id="workEx" className="workEx">
      <Container id="containerClass" maxWidth="xl" className="customCssBox">
        <header>
          <h1>Work Experience</h1>
        </header>
        <Box
          className="boxWorkEx"
          sx={{
            flexGrow: 1,
            display: "flex",
            width: "100%",
          }}
        >
          <Tabs
            orientation={mobileView ? "" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
          >
            {tabWorks()}
          </Tabs>
          {tabBody()}
        </Box>
      </Container>
    </section>
  );
}
