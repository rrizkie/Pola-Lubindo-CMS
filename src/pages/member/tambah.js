import React from "react";
import { Grid } from "@material-ui/core";

import Biodata from "../../components/member/tambah/Biodata";
import Komisi from "../../components/member/tambah/Komisi";
import Diskon from "../../components/member/tambah/Diskon";
import Button from "../../components/member/tambah/Button";

function ResponsiveDrawer() {
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
      <Button />
    </Grid>
  );
}

export default ResponsiveDrawer;
