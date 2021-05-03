import React from "react";
import {
  Grid,
  InputAdornment,
  TextField,
  Card,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <b>Harga Produk</b>
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Minimal Pemesanan
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField variant="outlined" size="small" fullWidth value="1" />
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Harga Satuan
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rp.</InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Harga Grosir
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Button variant="outlined" color="secondary">
              + Tambah Grosir
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
