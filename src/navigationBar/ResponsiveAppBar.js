import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  ListItemText,
  ListItem,
  Container,
  Button,
  List,
  Drawer,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";

const pages = [
  { name: "About", id: "About", icon: <InfoIcon /> },
  { name: "Work Experience", id: "workEx", icon: <WorkOutlineIcon /> },
  { name: "Project", id: "projects", icon: <AccountTreeIcon /> },
  { name: "Contact Me", id: "contactMe", icon: <ContactEmergencyIcon /> },
];

function ResponsiveAppBar({ setMode, mode, mobileView }) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenNavMenu = () => {
    setOpenModal(true);
  };
  const handleDrawerClose = () => {
    setOpenModal(false);
  };
  const handleCloseNavMenu = (event) => {
    const section = document.querySelector("#About");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpenModal(false);
  };
  const onModeChange = () => {
    mode === "light" ? setMode("dark") : setMode("light");
    setOpenModal(false);
  };
  return (
    <AppBar
      position="sticky"
      sx={
        mobileView
          ? {
              bgcolor: "transparent",
              boxShadow: "none",
              color: "black",
              backgroundImage: "none",
            }
          : { bgcolor: "hsla(0,0%,9%,.5)" }
      }
      className={mode}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <IconButton
              size="medium"
              onClick={handleOpenNavMenu}
              color="inherit"
              edge="end"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: { width: "50%" },
              }}
              anchor="right"
              open={openModal}
              onClose={handleDrawerClose}
              className={`${mode}`}
            >
              <List>
                {pages.map((page) => (
                  <a
                    href={`/#${page.id}`}
                    textAlign="center"
                    className="drawer"
                  >
                    <ListItem
                      key={page.id}
                      className="drawer"
                      onClick={handleCloseNavMenu}
                    >
                      <ListItemIcon>{page.icon}</ListItemIcon>
                      <ListItemText>{page.name}</ListItemText>
                    </ListItem>
                  </a>
                ))}
                <a
                  textAlign="center"
                  onClick={onModeChange}
                  className="modeChange"
                >
                  <ListItem key="darkModeLightMode" className="drawer">
                    <ListItemIcon>
                      {mode === "light" ? (
                        <Brightness4Icon />
                      ) : (
                        <Brightness7Icon />
                      )}
                    </ListItemIcon>
                    <ListItemText>
                      {mode === "light" ? "Light Mode" : "Dark Mode"}
                    </ListItemText>
                  </ListItem>
                </a>
              </List>
            </Drawer>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
            className={`blurBackground ${mode}`}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                href={`/#${page.id}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          {!mobileView ? (
            mode === "light" ? (
              <Brightness4Icon onClick={onModeChange} />
            ) : (
              <Brightness7Icon onClick={onModeChange} />
            )
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
