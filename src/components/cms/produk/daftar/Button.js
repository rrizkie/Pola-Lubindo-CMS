import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      disableElevation
      color="secondary"
      className={classes.tambah_produk}
    >
      + Tambah Produk
    </Button>
  );
}
