import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import Rating from "@mui/material/Rating";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function CustomizedDialogs({ open, setOpen, skill }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {skill.name === "Js" ? "JavaScript" : skill.name}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CalendarTodayOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                secondary="Experience"
                primary={`${skill.yearsOfExperience} Years`}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LayersOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${skill.level} Level`}
                secondary={
                  <Rating name="read-only" value={skill.rating} readOnly />
                }
              />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}
