import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
} from "@material-ui/core";

import useStyles from "./styles";

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.table_head}>
          <TableRow>
            <TableCell>Tgl. Transaksi</TableCell>
            <TableCell>ID Transaksi</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>Sales Invoice</TableCell>
            <TableCell>Metode Pembayaran</TableCell>
            <TableCell>Total Transaksi</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
