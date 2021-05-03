import React from "react";
import {
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  MenuItem,
  Switch,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import ImportExportOutlinedIcon from "@material-ui/icons/ImportExportOutlined";
import useStyles from "./styles";

export default function BasicTable(props) {
  console.log(props, "<<props");
  const classes = useStyles();

  // Aktif
  const IOSSwitch = () => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.switch,
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
  const handleActive = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // Checkbox
  const [checked, setChecked] = React.useState(true);
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  // Actions
  const actions = [
    {
      value: "edit",
    },
    {
      value: "hapus",
    },
  ];
  const [action, setAction] = React.useState("");
  const handleAction = (event) => {
    setAction(event.target.value);
  };

  // Table
  function createData(info_produk, judul_produk, sku, harga, stok, aktif) {
    return { info_produk, judul_produk, sku, harga, stok, aktif };
  }
  const rows = [createData(checked, "Judul Produk", 99, 0, 0, state.checkedB)];

  return (
    <TableContainer
      component={Paper}
      elevation={2}
      className={classes.table_container}
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
              <TableCell>
                <Checkbox
                  checked={row.info_produk}
                  onChange={handleChecked}
                  inputProps={{ "aria-label": "Checkbox" }}
                />
              </TableCell>
              <TableCell>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img
                      src="/img/cms/botol-oli.png"
                      alt="Botol Oli"
                      width="50"
                      height="50"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    {row.judul_produk}
                    <br />
                    SKU: {row.sku}
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  size="small"
                  value={row.harga}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Rp.</InputAdornment>
                    ),
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" value={row.stok} />
              </TableCell>
              <TableCell>
                <IOSSwitch
                  checked={row.aktif}
                  onChange={handleActive}
                  name="checkedB"
                />
              </TableCell>
              <TableCell>
                <TextField
                  id="outlined-select-currency"
                  select
                  value={action}
                  onChange={handleAction}
                  variant="outlined"
                  size="small"
                >
                  {actions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
