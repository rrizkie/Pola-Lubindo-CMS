import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Switch,
} from "@material-ui/core";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListIcon from "@material-ui/icons/List";
import useStyles from "./styles";

export default function BasicTable() {
  const IOSSwitch = () => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
      />
    );
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

  function createData(
    nama,
    tgl_gabung,
    kontak,
    komisi,
    produk_komisi,
    diskon,
    status,
    aksi
  ) {
    return {
      nama,
      tgl_gabung,
      kontak,
      komisi,
      produk_komisi,
      diskon,
      status,
      aksi,
    };
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const rows = [
    createData(
      "Kelvin Andrew",
      "29/01/2021",
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <img src="/img/cms/WhatsApp.svg" alt="WhatsApp" width="30" />
        </Grid>
        <Grid item xs={9}>
          0819812312
        </Grid>
        <Grid item xs={3}>
          <MailOutlineIcon />
        </Grid>
        <Grid item xs={9}>
          halim@hotmail.com
        </Grid>
      </Grid>,
      <Grid container alignItems="center">
        <Grid item xs={12}>
          Total: Rp 800.000
        </Grid>
        <Grid item xs={12}>
          Sisa: Rp 800.000
        </Grid>
      </Grid>,
      <Grid container alignItems="center">
        <Grid item xs={12}>
          10 Produk
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined">ubah komisi</Button>
        </Grid>
      </Grid>,
      <Grid container alignItems="center">
        <Grid item xs={12}>
          10 Produk
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined">ubah komisi</Button>
        </Grid>
      </Grid>,
      <IOSSwitch
        checked={state.checkedB}
        onChange={handleChange}
        name="checkedB"
      />,
      <IconButton aria-label="aksi" onClick={handleClick}>
        <ListIcon />
      </IconButton>
    ),
  ];

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        color="secondary"
        className={classes.tambah_member}
      >
        + Tambah Member
      </Button>
      <TableContainer
        component={Paper}
        elevation={2}
        className={classes.table_container}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button
                  className={classes.button}
                  endIcon={<ImportExportOutlinedIcon />}
                >
                  Nama
                </Button>
              </TableCell>
              <TableCell>Tgl gabung</TableCell>
              <TableCell>Kontak</TableCell>
              <TableCell>Komisi</TableCell>
              <TableCell>Produk Komisi</TableCell>
              <TableCell>Diskon</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.nama}>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.tgl_gabung}</TableCell>
                <TableCell>{row.kontak}</TableCell>
                <TableCell>{row.komisi}</TableCell>
                <TableCell>{row.produk_komisi}</TableCell>
                <TableCell>{row.diskon}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.aksi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>edit</MenuItem>
        <MenuItem onClick={handleClose}>hapus</MenuItem>
        <MenuItem onClick={handleClose}>reset password</MenuItem>
      </Menu>
    </>
  );
}
