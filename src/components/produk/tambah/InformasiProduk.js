import React from "react";
import {
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <b>Informasi Produk</b>
        </Typography>
        <Grid container spacing={5} alignItems="flex-start">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Nama Produk
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              helperText="0/70"
              style={{ height: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Brand
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField
              variant="outlined"
              size="small"
              select
              style={{ width: "40%" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
