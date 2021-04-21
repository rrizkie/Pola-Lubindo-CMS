import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";

import UploadFotoProduk from "../../../components/cms/produk/tambah/UploadFotoProduk";
import InformasiProduk from "../../../components/cms/produk/tambah/InformasiProduk";
import DetilProduk from "../../../components/cms/produk/tambah/DetilProduk";
import HargaProduk from "../../../components/cms/produk/tambah/HargaProduk";
import PengelolaanProduk from "../../../components/cms/produk/tambah/PengelolaanProduk";
import BeratPengiriman from "../../../components/cms/produk/tambah/BeratPengiriman";

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
        <UploadFotoProduk />
      </Grid>
      <Grid item xs={12}>
        <InformasiProduk />
      </Grid>
      <Grid item xs={12}>
        <DetilProduk />
      </Grid>
      <Grid item xs={12}>
        <HargaProduk />
      </Grid>
      <Grid item xs={12}>
        <PengelolaanProduk />
      </Grid>
      <Grid item xs={12}>
        <BeratPengiriman />
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
