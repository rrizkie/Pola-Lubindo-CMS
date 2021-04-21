import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  MenuItem,
  Switch,
  TextField,
  withStyles,
} from "@material-ui/core";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";

export default function BasicTable() {
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
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
        {...props}
      />
    );
  });

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const classes = useStyles();

  function createData(check, name, calories, fat, carbs, protein) {
    return { check, name, calories, fat, carbs, protein };
  }

  const currencies = [
    {
      value: "edit",
    },
    {
      value: "hapus",
    },
  ];
  const [currency, setCurrency] = React.useState("");

  const handleChangeAksi = (event) => {
    setCurrency(event.target.value);
  };

  const rows = [
    createData(
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />,
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img
            src="/img/cms/botol-oli.png"
            alt="Botol Oli"
            width="50"
            height="50"
          />
        </Grid>
        <Grid item xs={8}>
          Judul Produk
          <br />
          SKU
        </Grid>
      </Grid>,
      <TextField
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: <InputAdornment position="start">Rp.</InputAdornment>,
        }}
      />,
      <TextField variant="outlined" size="small" />,
      <IOSSwitch
        checked={state.checkedB}
        onChange={handleChange}
        name="checkedB"
      />,
      <TextField
        id="outlined-select-currency"
        select
        value={currency}
        onChange={handleChangeAksi}
        variant="outlined"
        size="small"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    ),
    createData(
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />,
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img src="/img/cms/botol-oli.png" alt="tes" width="50" height="50" />
        </Grid>
        <Grid item xs={8}>
          Judul Produk
          <br />
          SKU
        </Grid>
      </Grid>,
      <TextField
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: <InputAdornment position="start">Rp.</InputAdornment>,
        }}
      />,
      <TextField variant="outlined" size="small" />,
      <IOSSwitch
        checked={state.checkedB}
        onChange={handleChange}
        name="checkedB"
      />,
      <TextField
        id="outlined-select-currency"
        select
        value={currency}
        onChange={handleChangeAksi}
        variant="outlined"
        size="small"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    ),
  ];

  return (
    <>
      <Button
        variant="contained"
        disableElevation
        color="secondary"
        style={{ marginBottom: 20, backgroundColor: "red" }}
      >
        + Tambah Member
      </Button>
      <TableContainer
        component={Paper}
        elevation={2}
        style={{ borderRadius: 20 }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </TableCell>
              <TableCell>
                <Button
                  className={classes.button}
                  endIcon={<ImportExportOutlinedIcon />}
                >
                  INFO PRODUK
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  className={classes.button}
                  endIcon={<ImportExportOutlinedIcon />}
                >
                  HARGA
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  className={classes.button}
                  endIcon={<ImportExportOutlinedIcon />}
                >
                  STOK
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  className={classes.button}
                  endIcon={<ImportExportOutlinedIcon />}
                >
                  AKTIF
                </Button>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.check}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
