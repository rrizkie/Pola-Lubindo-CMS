import React from "react";
import { InputAdornment, MenuItem, TextField } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import useStyles from "./styles";

const Filter = () => {
  const classes = useStyles();

  const [filter, setFilter] = React.useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  return (
    <form className={classes.form_kategori} noValidate autoComplete="off">
      <TextField
        variant="outlined"
        size="small"
        label="Cari nama, produk, nomor resi, invoice"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="outlined"
        size="small"
        select
        value={filter}
        onChange={handleFilter}
        label="pilih filter"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>
      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        size="small"
      />
    </form>
  );
};

export default Filter;
