import React from "react";
import { Button, Grid } from "@material-ui/core";
import useStyles from "./styles";

function ResponsiveDrawer() {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.button}>
      <Button variant="outlined">Batal</Button>
      <Button variant="outlined">Simpan & tambah baru</Button>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.button_simpan}
      >
        Simpan
      </Button>
    </Grid>
  );
}

export default ResponsiveDrawer;
