import React from "react";
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import useStyles from "./styles";

export default function BasicTable() {
  const classes = useStyles();

  const [pilih, setPilih] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handlePilih = (event) => {
    setPilih({ ...pilih, [event.target.name]: event.target.checked });
  };

  const RedCheckbox = () => (
    <Checkbox color="default" className={classes.checkbox} />
  );

  return (
    <>
      <form className={classes.form_daftar} noValidate autoComplete="off">
        <FormControlLabel
          control={
            <RedCheckbox
              checked={pilih.checkedA}
              onChange={handlePilih}
              name="checkedA"
            />
          }
          label="1 pesanan terpilih"
        />

        <Button variant="outlined">cetak resi</Button>
        <Button variant="outlined">cetak label</Button>
      </form>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Breadcrumbs aria-label="breadcrumb">
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={pilih.checkedA}
                    onChange={handlePilih}
                    name="checkedA"
                  />
                }
                label={
                  <Typography color="textPrimary">pesanan diproses</Typography>
                }
              />
              <Link color="inherit" href="/">
                INV-contoh-12321321
              </Link>
              <Link color="inherit" href="/getting-started/installation/">
                John 08172322322
              </Link>
              <Typography color="textPrimary">22 Maret 2021 | 18:00</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={4} classname={classes.grid_align_right}>
            <Typography color="textPrimary">
              batas respons &ensp;
              <Button
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<QueryBuilderOutlinedIcon />}
                className={classes.batas_respons}
              >
                23 Jam
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid_border_top}>
          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img
                  src="/img/cms/botol-oli.png"
                  alt="Botol Oli"
                  width="50"
                  height="50"
                />
              </Grid>
              <Grid item xs={9}>
                Judul Produk
                <br />
                SKU
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Alamat
              <br />
              David angjaya (6285795911111) The green sariwangi tahap 3 no 14
              Parongpong, Kab. Bandung Barat, Jawa Barat 40559
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Kurir JNE Reguler
              <br />
              Rp 9.000
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            +2 produk lain lihat
            <br />
            Total bayar
          </Grid>
          <Grid item xs={3} className={classes.grid_align_right}>
            <Typography color="textPrimary">
              <b>Rp. 235.000</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid_border_top}>
          <Grid item xs={8}>
            sales by: Kevin
          </Grid>
          <Grid item xs={4} className={classes.grid_align_right}>
            <Button variant="outlined" className={classes.tolak_pesanan}>
              tolak pesanan
            </Button>
            &emsp;
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.terima_pesanan}
            >
              terima pesanan
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Breadcrumbs aria-label="breadcrumb">
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={pilih.checkedA}
                    onChange={handlePilih}
                    name="checkedA"
                  />
                }
                label={
                  <Typography color="textPrimary">pesanan diproses</Typography>
                }
              />
              <Link color="inherit" href="/">
                INV-contoh-12321321
              </Link>
              <Link color="inherit" href="/getting-started/installation/">
                John 08172322322
              </Link>
              <Typography color="textPrimary">22 Maret 2021 | 18:00</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={4} className={classes.grid_align_right}>
            <Typography color="textPrimary">
              batas respons &ensp;
              <Button
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<QueryBuilderOutlinedIcon />}
                className={classes.batas_respons}
              >
                23 Jam
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid_border_top}>
          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img
                  src="/img/cms/botol-oli.png"
                  alt="Botol Oli"
                  width="50"
                  height="50"
                />
              </Grid>
              <Grid item xs={9}>
                Judul Produk
                <br />
                SKU
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Alamat <Chip label="sudah dicetak" />
              <br />
              David angjaya (6285795911111) The green sariwangi tahap 3 no 14
              Parongpong, Kab. Bandung Barat, Jawa Barat 40559
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Kurir JNE Reguler
              <br />
              Rp 9.000
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            +2 produk lain lihat
            <br />
            Total bayar
          </Grid>
          <Grid item xs={3} className={classes.grid_align_right}>
            <Typography color="textPrimary">
              <b>Rp. 235.000</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={classes.grid_border_top}
        >
          <Grid item xs={9} className={classes.grid_align_right}>
            Nomor resi
          </Grid>
          <Grid item xs={3}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Breadcrumbs aria-label="breadcrumb">
              <FormControlLabel
                control={
                  <RedCheckbox
                    checked={pilih.checkedA}
                    onChange={handlePilih}
                    name="checkedA"
                  />
                }
                label={
                  <Typography color="textPrimary">pesanan diproses</Typography>
                }
              />
              <Link color="inherit" href="/">
                INV-contoh-12321321
              </Link>
              <Link color="inherit" href="/getting-started/installation/">
                John 08172322322
              </Link>
              <Typography color="textPrimary">22 Maret 2021 | 18:00</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={4} className={classes.grid_align_right}>
            <Typography color="textPrimary">
              telat &ensp;
              <Button
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<QueryBuilderOutlinedIcon />}
                className={classes.telat}
              >
                23 Jam
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid_border_top}>
          <Grid item xs={4}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <img
                  src="/img/cms/botol-oli.png"
                  alt="Botol Oli"
                  width="50"
                  height="50"
                />
              </Grid>
              <Grid item xs={9}>
                Judul Produk
                <br />
                SKU
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Alamat <Chip label="sudah dicetak" />
              <br />
              David angjaya (6285795911111) The green sariwangi tahap 3 no 14
              Parongpong, Kab. Bandung Barat, Jawa Barat 40559
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Kurir JNE Reguler
              <br />
              Rp 9.000
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            +2 produk lain lihat
            <br />
            Total bayar
          </Grid>
          <Grid item xs={3} className={classes.grid_align_right}>
            <Typography color="textPrimary">
              <b>Rp. 235.000</b>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={classes.grid_border_top}
        >
          <Grid item xs={9} className={classes.grid_align_right}>
            Nomor resi
          </Grid>
          <Grid item xs={3}>
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
