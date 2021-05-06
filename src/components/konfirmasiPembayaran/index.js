import React from "react";
import {
  Paper,
  Typography,
  Select,
  TextField,
  InputBase,
  Button,
  Options,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import { useStyle } from "./styles";

const KonfirmasiPembayaran = () => {
  const classes = useStyle();
  const history = useHistory();
  const back = () => {
    history.push("/pembayaran");
  };

  const allBank = [
    {
      value: "Bank Asal",
    },
    {
      value: "Bank Tujuan",
    },
  ];

  const [bankAsal, setBankAsal] = React.useState("Bank Asal");

  const handleBankAsal = (event) => {
    setBankAsal(event.target.value);
  };

  const [bankTujuan, setBankTujuan] = React.useState("Bank Tujuan");

  const handleBankTujuan = (event) => {
    setBankTujuan(event.target.value);
  };
  return (
    <div>
      <Paper className={classes.nav}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBackIcon style={{ cursor: "pointer" }} onClick={back} />
          </Typography>
          <Typography className={classes.leftContent}>
            Konfirmasi Pembayaran
          </Typography>
        </div>
      </Paper>

      <Paper className={classes.box} elevation={0}>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={2}>
            <DateRangeIcon htmlColor="#f5a505" />
          </Grid>
          <Grid item xs={10}>
            <TextField type="date" helperText="Tanggal Pembayaran Transaksi" />
          </Grid>
          <Grid item xs={2}>
            <PersonIcon htmlColor="#f5a505" />
          </Grid>
          <Grid item xs={10}>
            <InputBase
              placeholder="Nama di Rekening"
              className={classes.inputBase}
            />
          </Grid>
          <Grid item xs={2}>
            <AccountBalanceWalletIcon htmlColor="#f5a505" />
          </Grid>
          <Grid item xs={10}>
            <InputBase placeholder="Jumlah" className={classes.inputBase} />
          </Grid>
          <Grid item xs={2}>
            <AccountBalanceIcon htmlColor="#f5a505" />
          </Grid>
          <Grid item xs={10}>
            <TextField
              id="standard-select-currency"
              select
              value={bankAsal}
              onChange={handleBankAsal}
            >
              {allBank.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            &emsp;
            <TextField
              id="standard-select-currency"
              select
              value={bankTujuan}
              onChange={handleBankTujuan}
            >
              {allBank.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={2}>
            <InfoIcon htmlColor="#f5a505" />
          </Grid>
          <Grid item xs={10}>
            <InputBase placeholder="Keterangan" className={classes.inputBase} />
          </Grid>
        </Grid>
      </Paper>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Button className={classes.btn}>Konfirmasi</Button>
      </div>
      {/* <Paper className={classes.box}>
        <div className={classes.innerBox}>
          <DateRangeIcon />
          <TextField type="date" />
        </div>
        <div className={classes.innerBox}>
          <PersonIcon />
          <InputBase
            placeholder="Nama di Rekening"
            className={classes.inputBase}
          />
        </div>
        <div className={classes.innerBox}>
          <AccountBalanceWalletIcon />
          <InputBase placeholder="Jumlah" className={classes.inputBase} />
        </div>
        <div className={classes.innerBox}>
          <AccountBalanceIcon />
          <Select label="Bank Asal" />
          <Select label="Bank Tujuan" />
        </div>
        <div className={classes.innerBox}>
          <InfoIcon />
          <InputBase placeholder="Keterangan" className={classes.inputBase} />
        </div>
      </Paper>
      <Button className={classes.btn}>Konfirmasi</Button> */}
    </div>
  );
};

export default KonfirmasiPembayaran;
