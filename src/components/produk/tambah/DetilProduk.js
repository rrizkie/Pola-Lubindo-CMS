import React from "react";
import {
  Grid,
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
          <b>Detil Produk</b>
        </Typography>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Deskripsi Produk
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              helperText="0/2000"
              style={{ height: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Video Produk
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Button variant="outlined" color="transparent">
              + Tambah URL Video
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              TDS Produk
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Button variant="outlined" color="transparent">
              + Tambah URL TDS
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              TDS Produk
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Button variant="outlined" color="transparent">
              + Tambah URL MSDS
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Sertifikasi
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Button variant="outlined" color="transparent">
              + Tambah URL Sertifikasi
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
