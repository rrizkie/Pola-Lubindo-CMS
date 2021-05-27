import React from "react";
import {
  Button,
  Grid,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  MenuItem,
  TextField,
  Popover,
  InputAdornment,
} from "@material-ui/core";

import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListIcon from "@material-ui/icons/List";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles";

export default function Index() {
  const classes = useStyles();

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

  function createData(
    nama,
    tgl_gabung,
    whatsapp,
    email,
    total,
    sisa,
    produk_komisi,
    diskon,
    status,
    aksi
  ) {
    return {
      nama,
      tgl_gabung,
      whatsapp,
      email,
      total,
      sisa,
      produk_komisi,
      diskon,
      status,
      aksi,
    };
  }

  const rows = [
    createData(
      "Kelvin Andrew",
      "29/01/2021",
      "0819812312",
      "halim@hotmail.com",
      "Total: Rp 800.000",
      "Sisa: Rp 800.000",
      "10 produk",
      "10 produk",
      state.checkedB,
      "lorem ipsum"
    ),
  ];

  const levels = [
    {
      value: "Level 1",
    },
  ];

  const [level, setLevel] = React.useState("Level 1");

  const handleLevel = (event) => {
    setLevel(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openAction = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeAction = () => {
    setAnchorEl(null);
  };
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
            {rows.map((row) => (
              <TableRow key={row.nama}>
                <TableCell>{row.nama}</TableCell>
                <TableCell>{row.tgl_gabung}</TableCell>
                <TableCell>
                  <Grid container alignItems="center">
                    <Grid item xs={3}>
                      <img
                        src="/img/cms/WhatsApp.svg"
                        alt="WhatsApp"
                        width="30"
                      />
                    </Grid>
                    <Grid item xs={9}>
                      {row.whatsapp}
                    </Grid>
                    <Grid item xs={3}>
                      <MailOutlineIcon />
                    </Grid>
                    <Grid item xs={9}>
                      {row.email}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Grid container alignItems="center">
                    <Grid item xs={12}>
                      {row.total}
                    </Grid>
                    <Grid item xs={12}>
                      {row.sisa}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <TextField
                    select
                    variant="outlined"
                    value={level}
                    size="small"
                    onChange={handleLevel}
                  >
                    {levels.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell>
                  <Grid container alignItems="center">
                    <Grid item xs={12}>
                      {row.diskon}
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="outlined">ubah</Button>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <IOSSwitch
                    checked={row.status}
                    onChange={handleChange}
                    name="checkedB"
                  />
                </TableCell>
                <TableCell>
                  <IOSSwitch
                    checked={row.status}
                    onChange={handleChange}
                    name="checkedB"
                  />
                </TableCell>
                <TableCell>
                  <ListIcon onClick={openAction} />
                  <Popover
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={closeAction}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={closeAction}>Edit</MenuItem>
                    <MenuItem onClick={closeAction}>Hapus</MenuItem>
                    <MenuItem onClick={closeAction}>Reset Password</MenuItem>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
