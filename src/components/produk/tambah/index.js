import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Switch,
  MenuItem,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";
import { CMSContext } from "../../../context/state";

function ResponsiveDrawer() {
  const classes = useStyles();
  const { brand, fetchBrand, tambahProduk } = useContext(CMSContext);
  const [file, setFile] = useState("/img/cms/photo-product-placeholder.png");
  const [weight, setWeight] = useState("gram");
  const [input, setInput] = useState({
    fotoProduk: "",
    namaProduk: "",
    brandId: "",
    deskripsi: "",
    minPesanan: "",
    hargaSatuan: "",
    hargaGrosir: "",
    statusProduk: false,
    stock: "",
    sku: "",
    weight: "",
    panjang: "",
    lebar: "",
    tinggi: "",
    komisiStatus: "",
    komisi: "",
    levelKomisi: "",
  });

  useEffect(() => {
    fetchBrand();
  }, []);

  const weights = [
    {
      value: "gram",
    },
    {
      value: "kilogram",
    },
  ];

  const send = (e) => {
    const data = new FormData();
    data.append("data", input);
    data.append("file", file);

    console.log(data);
    tambahProduk(data);
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
            <Grid item xs={9} className={classes.imgInput}>
              <label for="file-input">
                <img
                  src={file}
                  alt="Placeholder"
                  id="img"
                  style={{ width: "180px", height: "auto" }}
                />
              </label>
              <input
                id="file-input"
                type="file"
                accept=".jpg"
                onChange={handleImage}
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
                  name="namaProduk"
                  onChange={handleInput}
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
                  name="brandId"
                  onChange={handleInput}
                >
                  {brand.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.namaBrand}
                    </MenuItem>
                  ))}
                </TextField>
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
                  name="deskripsi"
                  onChange={handleInput}
                />
              </Grid>
            </Grid>

            {/* <Grid container spacing={5} alignItems="center">
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
            </Grid> */}

            {/* <Grid container spacing={5} alignItems="center">
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
            </Grid> */}

            {/* <Grid container spacing={5} alignItems="center">
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
            </Grid> */}

            {/* <Grid container spacing={5} alignItems="center">
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
            </Grid> */}
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
                  name="minPesanan"
                  onChange={handleInput}
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
                  name="hargaSatuan"
                  onChange={handleInput}
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
                    <Switch
                      checked={input.statusProduk}
                      onChange={() =>
                        setInput({
                          ...input,
                          statusProduk: !input.statusProduk,
                        })
                      }
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
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  name="stock"
                  onChange={handleInput}
                />
              </Grid>
            </Grid>

            <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  SKU
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  name="sku"
                  onChange={handleInput}
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
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  name="weight"
                  onChange={handleInput}
                />
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
                  name="panjang"
                  onChange={handleInput}
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
                  name="lebar"
                  onChange={handleInput}
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
                  name="tinggi"
                  onChange={handleInput}
                />
              </Grid>
            </Grid>

            {/* <Grid container spacing={5} alignItems="center">
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
            </Grid> */}

            {/* <Grid container spacing={5} alignItems="center">
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
            </Grid> */}

            {/* <Grid container spacing={5} alignItems="center">
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Preorder
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={}
                      onChange={}
                    />
                  }
                />
              </Grid>
            </Grid> */}
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
                    <Switch
                      checked={input.komisiStatus}
                      onChange={() =>
                        setInput({
                          ...input,
                          komisiStatus: !input.komisiStatus,
                        })
                      }
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
                  name="komisi"
                  onChange={handleInput}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2" component="p" gutterBottom>
                  Nama Level Komisi
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  name="levelKomisi"
                  onChange={handleInput}
                />
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
          onClick={send}
        >
          Simpan
        </Button>
      </Grid>
    </Grid>
  );
}

export default ResponsiveDrawer;
