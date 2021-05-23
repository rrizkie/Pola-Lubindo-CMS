import React, { useContext } from "react";
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
import { CMSContext } from "../../../context/state";

export default function BasicTable() {
  const classes = useStyles();
  const { produk } = useContext(CMSContext);
  console.log(produk);

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
  const [statusProduk, setStatusProduk] = React.useState(true);
  const handleActive = (event) => {
    setStatusProduk(!statusProduk);
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
          {produk.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <Checkbox
                  // checked={row.info_produk}
                  onChange={handleChecked}
                  inputProps={{ "aria-label": "Checkbox" }}
                />
              </TableCell>
              <TableCell>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <img
                      src="https://cf.shopee.co.id/file/34f04fdc88d0948d47fc9e658306fb02"
                      alt="Botol Oli"
                      width="50"
                      height="50"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    {item.namaProduk}
                    <br />
                    SKU: {item.sku}
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <TextField
                  variant="outlined"
                  size="small"
                  value={item.hargaSatuan}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Rp.</InputAdornment>
                    ),
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" value={item.stock} />
              </TableCell>
              <TableCell>
                <IOSSwitch
                  checked={item.statusProduk}
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
