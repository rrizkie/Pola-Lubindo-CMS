import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <Grid container>
        <Grid item xs={3}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <b>Upload Foto Produk</b>
            </Typography>
            <Typography variant="body2" component="p">
              ukuran 700px x 700px
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={9}>
          <img src="/img/cms/photo-product-placeholder.png" alt="Placeholder" />
        </Grid>
      </Grid>
    </Card>
  );
}
