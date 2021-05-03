import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@material-ui/core";

import useStyles from "./styles";

export default function BasicTable() {
  const classes = useStyles();

  function createData(nama_produk, harga, komisi_rp, komisi_persen) {
    return { nama_produk, harga, komisi_rp, komisi_persen };
  }

  const rows = [
    createData("Lucas Oil Super Coolant", "Rp. 500.000", "45.000", "14%"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.table_head}>
          <TableRow>
            <TableCell>Nama Produk</TableCell>
            <TableCell align="right">Harga</TableCell>
            <TableCell align="right">Komisi (Rp.)</TableCell>
            <TableCell align="right">Komisi (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.nama_produk}>
              <TableCell component="th" scope="row">
                {row.nama_produk}
              </TableCell>
              <TableCell align="right">{row.harga}</TableCell>
              <TableCell align="right">
                <TextField
                  value={row.komisi_rp}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell align="right">{row.komisi_persen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
