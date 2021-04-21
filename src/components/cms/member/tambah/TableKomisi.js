import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(
    "Lucas Oil Super Coolant",
    "Rp. 500.000",
    <TextField value="45.000" variant="outlined" size="small" />,
    "14%"
  ),
  createData(
    "Lucas Oil Super Coolant",
    "Rp. 500.000",
    <TextField value="45.000" variant="outlined" size="small" />,
    "14%"
  ),
  createData(
    "Lucas Oil Super Coolant",
    "Rp. 500.000",
    <TextField value="45.000" variant="outlined" size="small" />,
    "14%"
  ),
  createData(
    "Lucas Oil Super Coolant",
    "Rp. 500.000",
    <TextField value="45.000" variant="outlined" size="small" />,
    "14%"
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{ backgroundColor: "#A9A9A9" }}>
          <TableRow>
            <TableCell>Nama Produk</TableCell>
            <TableCell align="right">Harga</TableCell>
            <TableCell align="right">Komisi (Rp.)</TableCell>
            <TableCell align="right">Komisi (%)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
