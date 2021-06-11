import React, { useContext, useEffect, useState } from "react";

import {
  Chip,
  TextField,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  MenuItem,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";
import { CMSContext } from "../../../context/state";

export default function Index(params) {
  const classes = useStyles();
  const { transaksi, fetchTransaksi, ubahStatusPembayaran, tolakPesanan } =
    useContext(CMSContext);
  const [filter, setFilter] = React.useState("penjualan");

  const allFilter = [
    { value: "semua transaksi" },
    { value: "perlu verifikasi" },
    { value: "belum bayar" },
    { value: "verified" },
    { value: "pembayaran ditolak" },
    { value: "transaksi dibatalkan" },
  ];

  const handleVerified = (data) => {
    console.log(data);
    ubahStatusPembayaran({ statusPembayaran: "verified", id: data.id });
  };

  const handleTolak = async (data) => {
    console.log(data);
    data.statusPesanan = "pesanan di tolak";
    data.statusPembayaran = "pesanan di tolak";
    data.statusPengiriman = "pesanan di tolak";
    const response = await tolakPesanan(data);
    if (response.message) {
      fetchTransaksi();
    }
  };

  useEffect(() => {
    fetchTransaksi();
  }, []);

  return (
    <>
      <TextField
        label="Cari transaksi"
        id="standard-start-adornment"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
      <br />
      <br />
      <div className={classes.root}>
        {allFilter.map((option) => (
          <Chip
            key={option.value}
            label={option.value}
            onClick={() => setFilter(option.value)}
            style={{
              backgroundColor: filter === option.value ? "red" : null,
              color: filter === option.value ? "#fff" : null,
            }}
          />
        ))}
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.table_head}>
            <TableRow>
              <TableCell>Tgl Transaksi</TableCell>
              <TableCell>ID Transaksi</TableCell>
              <TableCell>Member</TableCell>
              <TableCell>Sales Invoice</TableCell>
              <TableCell>Metode Pembayaran</TableCell>
              <TableCell>Bank Asal</TableCell>
              <TableCell>Bank Tujuan</TableCell>
              <TableCell>Total Transaksi</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transaksi.map((item) => (
              <TableRow>
                <TableCell>{item.createdAt.split("T")[0]}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.Carts[0].User?.nama}</TableCell>
                <TableCell>{item.invoice}</TableCell>
                <TableCell>{item.metodePembayaran}</TableCell>
                <TableCell>{item.bankAsal}</TableCell>
                <TableCell>{item.bankTujuan}</TableCell>
                <TableCell>Rp. {item.totalHarga}</TableCell>
                <TableCell>{item.statusPembayaran}</TableCell>
                {item.statusPembayaran === "menunggu konfirmasi" ? (
                  <TableCell>
                    <TextField
                      id="outlined-select-currency"
                      select
                      variant="outlined"
                      size="small"
                    >
                      <MenuItem
                        value="verified"
                        onClick={() => handleVerified(item)}
                      >
                        Verified
                      </MenuItem>
                      <MenuItem value="tolak" onClick={() => handleTolak(item)}>
                        Tolak
                      </MenuItem>
                    </TextField>
                  </TableCell>
                ) : (
                  ""
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
