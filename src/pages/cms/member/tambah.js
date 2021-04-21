import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

import Biodata from "../../../components/cms/member/tambah/Biodata";
import Komisi from "../../../components/cms/member/tambah/Komisi";
import Diskon from "../../../components/cms/member/tambah/Diskon";

function ResponsiveDrawer() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
      textAlign: "right",
    },
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Biodata />
      </Grid>
      <Grid item xs={12}>
        <Komisi />
      </Grid>
      <Grid item xs={12}>
        <Diskon />
      </Grid>
      <Grid item xs={12} className={classes.root}>
        <Button variant="outlined">Batal</Button>
        <Button variant="outlined">Simpan & tambah baru</Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{ backgroundColor: "red" }}
        >
          Simpan
        </Button>
      </Grid>
    </Grid>
  );
}

export default ResponsiveDrawer;
