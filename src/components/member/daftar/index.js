import React, { useContext, useEffect } from "react";
import { CMSContext } from "../../../context/state";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
} from "@material-ui/core";

import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

import MemberCard from "../memberCard";

export default function Index() {
  const classes = useStyles();

  const { fetchMember, member } = useContext(CMSContext);

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <>
      <TextField
        label="Cari nama, no hp, email"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <br />
      <br />

      <div style={{ marginBottom: 20 }}>
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          className={classes.tambah_member}
        >
          + Tambah Member
        </Button>

        <Button variant="outlined" disableElevation>
          unduh laporan penjualan
        </Button>
      </div>

      <TableContainer
        component={Paper}
        elevation={2}
        className={classes.table_container}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button endIcon={<ImportExportOutlinedIcon />}>Nama</Button>
              </TableCell>
              <TableCell>Tgl gabung</TableCell>
              <TableCell>Kontak</TableCell>
              <TableCell>Komisi</TableCell>
              <TableCell>Level Komisi</TableCell>
              <TableCell>Diskon</TableCell>
              <TableCell>Premiere</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {member.map((row) => (
              <MemberCard row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
