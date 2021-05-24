import React, { useContext, useEffect } from "react";
import {
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import useStyles from "./styles";
import { CMSContext } from "../../context/state";

export default function BasicTable({ item }) {
  const classes = useStyles();
  const { konfirmasiTransaksi } = useContext(CMSContext);

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

  const [lihat, setLihat] = React.useState(false);

  function Telat() {
    return (
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
    );
  }

  const handleTerimaPesanan = (rowData) => {
    console.log(rowData);
    rowData.statusPesanan = "pesanan di konfirmasi";
    rowData.statusPembayaran = "pesanan di konfirmasi";
    rowData.statusPengiriman = "sedang di kirim";

    console.log(rowData, "after");
    konfirmasiTransaksi(rowData);
  };

  function BatasRespons(params) {
    return (
      <Typography color="textPrimary">
        batal respons &ensp;
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
    );
  }

  return (
    <>
      {/* <form className={classes.form_daftar} noValidate autoComplete="off">
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
      </form> */}
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
                  <Typography color="textPrimary">
                    {item.statusPesanan}
                  </Typography>
                }
              />
              <Link color="inherit" href="/">
                {item.invoice}
              </Link>
              <Link color="inherit" href="/getting-started/installation/">
                {item.namaPenerima}
              </Link>
              <Typography color="textPrimary">
                {item.createdAt.split("T")[0]} |{" "}
                {item.createdAt.split("T")[1].split(".")[0]}
              </Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={4} className={classes.grid_align_right}>
            <BatasRespons />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid_border_top}>
          <Grid item xs={4}>
            <Grid container spacing={3} key={item.Carts[0].Produk.id}>
              <Grid item xs={3}>
                <img
                  src={item.Carts[0].Produk.fotoProduk}
                  alt={item.Carts[0].Produk.namaProduk}
                  width="50"
                  height="50"
                />
              </Grid>
              <Grid item xs={9}>
                {item.Carts[0].Produk.namaProduk}
                <br />
                {item.Carts[0].qty} x Rp. {item.Carts[0].Produk.hargaSatuan}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Alamat
              <br />
              {item.alamatPengiriman}
            </Typography>
          </Grid>
          <Grid item xs={3} className={classes.grid_border_left}>
            <Typography color="textPrimary">
              Kurir JNE
              <br />
              Rp {item.ongkosKirim}
            </Typography>
          </Grid>
        </Grid>
        {item.Carts.length > 1 ? (
          <Grid container spacing={3}>
            <Grid item xs={9}>
              +{item.Carts.length} produk lain&nbsp;
              <Link href="#" onClick={() => setLihat(!lihat)}>
                {lihat ? "tutup" : "lihat"}
              </Link>
              {lihat ? (
                <Paper className={classes.paper}>
                  {item.Carts.map((produk) => (
                    <Grid container spacing={3}>
                      <>
                        <Grid item xs={3}>
                          <img
                            src={produk.Produk.fotoProduk}
                            alt={produk.Produk.namaProduk}
                            width="50"
                            height="50"
                          />
                        </Grid>
                        <Grid item xs={9}>
                          {produk.Produk.namaProduk}
                          <br />
                          {produk.qty} x {produk.Produk.hargaSatuan}
                        </Grid>
                      </>
                    </Grid>
                  ))}
                </Paper>
              ) : null}
              <br />
              Total bayar
            </Grid>
            <Grid item xs={3} className={classes.grid_align_right}>
              <Typography color="textPrimary">
                <b>Rp. {item.jumlahBayar}</b>
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <br />
              Total Bayar
            </Grid>
            <Grid item xs={3} className={classes.grid_align_right}>
              <Typography color="textPrimary">
                <b>Rp. {item.jumlahBayar}</b>
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid
          container
          spacing={3}
          alignItems="center"
          className={classes.grid_border_top}
        >
          <Grid item xs={4}>
            {/* sales by: {field.sales_by} */}
          </Grid>
          {item.statusPesanan === "menunggu konfirmasi" ? (
            <Grid item xs={8} className={classes.grid_align_right}>
              <Button variant="outlined" className={classes.tolak_pesanan}>
                tolak pesanan
              </Button>
              &emsp;
              <Button
                variant="contained"
                color="primary"
                disableElevation
                className={classes.terima_pesanan}
                onClick={() => handleTerimaPesanan(item)}
              >
                terima pesanan
              </Button>
            </Grid>
          ) : item.statusPesanan === "pesanan di konfirmasi" ? (
            <>
              <Grid item xs={5} className={classes.grid_align_right}>
                Nomor resi
              </Grid>
              <Grid item xs={3}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </>
          ) : null}
        </Grid>
      </Paper>
    </>
  );
}
