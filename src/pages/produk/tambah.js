import React from "react";
import { Grid } from "@material-ui/core";

import UploadFotoProduk from "../../components/produk/tambah/UploadFotoProduk";
import InformasiProduk from "../../components/produk/tambah/InformasiProduk";
import DetilProduk from "../../components/produk/tambah/DetilProduk";
import HargaProduk from "../../components/produk/tambah/HargaProduk";
import PengelolaanProduk from "../../components/produk/tambah/PengelolaanProduk";
import BeratPengiriman from "../../components/produk/tambah/BeratPengiriman";
import Button from "../../components/produk/tambah/Button";

function ResponsiveDrawer() {
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
      <Button />
    </Grid>
  );
}

export default ResponsiveDrawer;
