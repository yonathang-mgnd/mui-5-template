import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import ExitToApp from "@mui/icons-material/ExitToApp";
import { useUserDispatch, signOut, useUserState } from "../../context/UserContext";
import useStyles from "./styles";

const Header = ({ history } : RouteComponentProps) => {
  const classes = useStyles();

  const userState = useUserState();
  const userDispatch = useUserDispatch();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logotype}>
          DAML App Template
        </Typography>
        <div className={classes.grow} />
        { userState.isAuthenticated && <Typography variant="h6">User: {userState.party}</Typography> }
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(event) => signOut(userDispatch, history)}
          size="large">
          {/* <ExitToApp className={classes.headerIcon} /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);