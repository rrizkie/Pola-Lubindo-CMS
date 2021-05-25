import React, { useContext, useState } from "react";
import {
  Checkbox,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  TableCell,
  TableRow,
  Switch,
} from "@material-ui/core";
import { CMSContext } from "../../../context/state";

const ProdukCard = ({ row }) => {
  const { ubahStatusProduk, deleteproduk } = useContext(CMSContext);
  const [checked, setChecked] = useState(false);
  const [produkStatus, setProdukStatus] = useState(
    row.statusProduk === true ? true : false
  );
  const actions = [
    {
      value: "edit",
    },
    {
      value: "hapus",
    },
  ];

  const handleAction = (input) => {
    console.log(input);
    if (input === "hapus") {
      deleteproduk(row.id);
    }
  };

  const handleStatus = () => {
    setProdukStatus(!produkStatus);
    ubahStatusProduk({ statusProduk: !produkStatus, id: row.id });
  };

  return (
    <TableRow key={row.id}>
      <TableCell>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.value)}
          inputProps={{ "aria-label": "Checkbox" }}
        />
      </TableCell>
      <TableCell>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <img src={row.fotoProduk} alt="Botol Oli" width="50" height="50" />
          </Grid>
          <Grid item xs={9}>
            {row.namaProduk}
            <br />
            SKU: {row.sku}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <TextField
          variant="outlined"
          size="small"
          value={row.hargaSatuan}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Rp.</InputAdornment>
            ),
          }}
        />
      </TableCell>
      <TableCell>
        <TextField variant="outlined" size="small" value={row.stock} />
      </TableCell>
      <TableCell>
        <Switch checked={produkStatus} onChange={handleStatus} />
      </TableCell>
      <TableCell>
        <TextField
          id="outlined-select-currency"
          select
          variant="outlined"
          size="small"
        >
          {actions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={() => handleAction(option.value)}
            >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
    </TableRow>
  );
};

export default ProdukCard;
