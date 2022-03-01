import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStyles from "./styles";

const Error = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Paper classes={{ root: classes.paperRoot }}>
        <Typography variant="h3" color="primary" className={classes.errorCode}>404</Typography>
        <Typography variant="h5" color="primary" className={classes.safetyText}>
          Oops. Looks like the page you&apos;re looking for no longer exists
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/" size="large" className={classes.backButton}>
          Back to Home
        </Button>
      </Paper>
    </Grid>
  );
}

export default Error;