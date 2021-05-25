import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Switch,
  FormControl,
  MenuItem,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

function ResponsiveDrawer() {
  const classes = useStyles();

  const IOSSwitch = () => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.switch,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
      />
    );
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const weights = [
    {
      value: "gram",
    },
    {
      value: "kilogram",
    },
  ];

  const [weight, setWeight] = React.useState("gram");

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleChangePreorder = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const RedRadio = () => <Radio color="default" className={classes.checkbox} />;
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item xs={12}>
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
              <img
                src="/img/cms/photo-product-placeholder.png"
                alt="Placeholder"
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
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
                  multiline
                  rows={10}
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
                  MSDS Produk
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
              <Grid item xs={5}>
                <TextField variant="outlined" size="small" fullWidth />
                <br />
                <Typography variant="body2" component="p" gutterBottom>
                  + Tambah Sertifikasi Baru
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Button variant="outlined" color="transparent">
                  + Tambah URL Sertifikasi
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
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
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  value="1"
                />
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
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.root} elevation={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <b>Pengelolaan Produk</b>
            </Typography>
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Status Produk
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                    />
                  }
                  label="Aktif"
                />
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Stok Produk
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  SKU
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.root} elevation={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <b>Berat & Pengiriman</b>
            </Typography>
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Berat Produk
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  select
                  value={weight}
                  onChange={handleChangeWeight}
                >
                  {weights.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Ukuran
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Panjang"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Lebar"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Tinggi"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">cm</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Asuransi Pengiriman
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="Wajib"
                  >
                    <FormControlLabel
                      value="Wajib"
                      control={<RedRadio />}
                      label="Wajib"
                    />
                    <FormControlLabel
                      value="Opsional"
                      control={<RedRadio />}
                      label="Opsional"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Layanan Pengiriman
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue=""
                  >
                    <FormControlLabel
                      value="Standar"
                      control={<RedRadio />}
                      label="Standar"
                    />
                    <FormControlLabel
                      value="Custom"
                      control={<RedRadio />}
                      label="Custom"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Preorder
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.checkedB}
                      onChange={handleChangePreorder}
                      name="checkedB"
                    />
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.root} elevation={2}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <b>Komisi</b>
            </Typography>
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Status Produk
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                    />
                  }
                  label="Aktif"
                />
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Berlaku Sebesar
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Nama Level Komisi
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="body2" component="p" gutterBottom>
                  * nama level komisi
                </Typography>
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
