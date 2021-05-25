import React from "react";
import {
  Grid,
  TextField,
  CardContent,
  Card,
  Typography,
  Button,
  Switch,
  withStyles,
  FormControlLabel,
} from "@material-ui/core";

import useStyles from "./styles";

function ResponsiveDrawer() {
  const classes = useStyles();

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const [akunPremiere, setAkunPremiere] = React.useState({
    checked: true,
  });

  const changeAkunPremiere = (event) => {
    setAkunPremiere({
      ...akunPremiere,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card className={classes.root} elevation={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <b>Biodata</b>
            </Typography>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={2}>
                <Typography variant="body2" component="p">
                  Nama
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>

              <Grid item xs={2}>
                <Typography variant="body2" component="p">
                  No. Telepon
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={1}>
                <Typography variant="body2" component="p">
                  Email
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>

              <Grid item xs={2}>
                <Typography variant="body2" component="p">
                  KTP
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
              <Grid item xs={1}>
                <Typography variant="body2" component="p">
                  NPWP
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>

              <Grid item xs={2}>
                <Typography variant="body2" component="p">
                  Akun Premiere
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={akunPremiere.checked}
                      onChange={changeAkunPremiere}
                      name="checked"
                    />
                  }
                  label={
                    akunPremiere.checked === true ? "Aktif" : "Tidak Aktif"
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} className={classes.button}>
        <Button variant="outlined">Batal</Button>
        <Button variant="outlined">Simpan & tambah baru</Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.button_simpan}
        >
          Simpan
        </Button>
      </Grid>
    </Grid>
  );
}

export default ResponsiveDrawer;
