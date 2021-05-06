import React from "react";
import { Paper, Typography, Grid, Button } from "@material-ui/core";

import { useStyle } from "./styles";

import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

import { BottomNav } from "../bottomNav";
const Transaksi = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Daftar Transaksi
      </Typography>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={1} style={{ color: "red" }}>
          <AccountBalanceWalletOutlinedIcon />
        </Grid>

        <Grid item xs={5} style={{ color: "red" }}>
          <Typography variant="subtitle1">Menunggu Pembayaran</Typography>
        </Grid>

        <Grid item xs={1} style={{ color: "red" }}>
          <AutorenewIcon />
        </Grid>

        <Grid item xs={5} style={{ color: "red" }}>
          <Typography variant="subtitle1">Transaksi Berlangsung</Typography>
        </Grid>
      </Grid>

      <Paper className={classes.paper}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          style={{ borderBottom: "1px solid" }}
        >
          <Grid item xs={1}>
            <LocalMallIcon />
          </Grid>
          <Grid item xs={11}>
            <Typography>
              <b>Belanja</b>
              <br />
              30 Des 2021
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={1}>
            <CheckBoxOutlineBlankIcon />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              <b> Judul Produk</b>
              <br />1 barang
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle1">
              konfirmasi sebelum <br />
              22/03/2021 23:00
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="subtitle1">
              +1 barang lainnya
              <br />
              Total belanja
              <br />
              Rp. 230.000
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button style={{ backgroundColor: "green", color: "white" }}>
              Konfirmasi Pembayaran
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <BottomNav />
    </div>
  );
};

export default Transaksi;
