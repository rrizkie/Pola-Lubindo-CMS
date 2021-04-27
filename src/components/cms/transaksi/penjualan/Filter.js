import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Chips() {
  const classes = useStyles();

  const [filter, setFilter] = React.useState("penjualan");
  const allFilter = [
    { value: "semua transaksi" },
    { value: "perlu verifikasi" },
    { value: "belum bayar" },
    { value: "verified" },
    { value: "pembayaran ditolak" },
    { value: "transaksi dibatalkan" },
  ];

  return (
    <div className={classes.root}>
      {allFilter.map((option) => (
        <Chip
          key={option.value}
          label={option.value}
          onClick={() => setFilter(option.value)}
          style={{
            backgroundColor: filter === option.value ? "red" : null,
            color: filter === option.value ? "#fff" : null,
          }}
        />
      ))}
    </div>
  );
}
