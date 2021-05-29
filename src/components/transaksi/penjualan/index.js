import React, { useContext, useEffect } from "react";

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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";
import { CMSContext } from "../../../context/state";

export default function Index(params) {
  const classes = useStyles();
  const { transaksi, fetchTransaksi } = useContext(CMSContext);
  const [filter, setFilter] = React.useState("penjualan");

  const allFilter = [
    { value: "semua transaksi" },
    { value: "perlu verifikasi" },
    { value: "belum bayar" },
    { value: "verified" },
    { value: "pembayaran ditolak" },
    { value: "transaksi dibatalkan" },
  ];

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
              <TableCell>Total Transaksi</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transaksi.map((item) => (
              <TableRow>
                <TableCell>{item.createdAt.split("T")[0]}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.Carts[0].User.nama}</TableCell>
                <TableCell>{item.invoice}</TableCell>
                <TableCell>{item.metodePembayaran}</TableCell>
                <TableCell>Rp. {item.totalHarga}</TableCell>
                <TableCell>{item.statusPesanan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
