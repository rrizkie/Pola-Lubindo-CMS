import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

export default function InputAdornments() {
  return (
    <TextField
      label="Cari transaksi"
      id="standard-start-adornment"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: <SearchIcon />,
      }}
    />
  );
}
