import React from "react";
import {
  Grid,
  TextField,
  CardContent,
  Card,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          <b>Biodata</b>
        </Typography>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Nama
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Brand
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2" component="p" gutterBottom>
              Email
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
