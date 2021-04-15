import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
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
