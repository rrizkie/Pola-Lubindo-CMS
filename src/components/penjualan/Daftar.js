import React from "react";
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

  const [lihat, setLihat] = React.useState(false);

  function BtnPesanan(params) {
    return (
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
        >
          terima pesanan
        </Button>
      </Grid>
    );
  }

  function NomorResi(params) {
    return (
      <>
        <Grid item xs={5} className={classes.grid_align_right}>
          Nomor resi
        </Grid>
        <Grid item xs={3}>
          <TextField variant="outlined" size="small" fullWidth />
        </Grid>
      </>
    );
  }

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

  const allPesanan = [
    {
      no_invoice: "INV-contoh-12321321",
      nm_pemesan: "John",
      tgl_pemesanan: "22 Maret 2021",
      jm_pemesanan: "18:00",
      status_respons: <BatasRespons />,
      status_cetak: "sudah dicetak",
      produk: [
        {
          nm_produk: "lorem ipsum",
          gmbr_produk: "/img/cms/botol-oli.png",
          jumlah: 2,
          harga: "165.000",
          sub_produk: [
            {
              nm_produk: "lorem ipsum",
              gmbr_produk: "/img/cms/botol-oli.png",
              jumlah: 2,
              harga: "165.000",
            },
          ],
        },
      ],
      alamat: "The Green Sariwangi, Kab. Bandung Barat, Jawa Barat",
      kurir: "JNE Reguler",
      ongkos_kirim: "9.000",
      total_biaya: "235.000",
      sales_by: "Kevin",
      action: <BtnPesanan />,
    },
    {
      no_invoice: "INV-contoh-12321321",
      nm_pemesan: "John",
      tgl_pemesanan: "22 Maret 2021",
      jm_pemesanan: "18:00",
      status_respons: <BatasRespons />,
      status_cetak: "sudah dicetak",
      produk: [
        {
          nm_produk: "lorem ipsum",
          gmbr_produk: "/img/cms/botol-oli.png",
          jumlah: 2,
          harga: "165.000",
          sub_produk: [
            {
              nm_produk: "lorem ipsum",
              gmbr_produk: "/img/cms/botol-oli.png",
              jumlah: 2,
              harga: "165.000",
            },
          ],
        },
      ],
      alamat: "The Green Sariwangi, Kab. Bandung Barat, Jawa Barat",
      kurir: "JNE Reguler",
      ongkos_kirim: "9.000",
      total_biaya: "235.000",
      sales_by: "Kevin",
      action: <NomorResi />,
    },
    {
      no_invoice: "INV-contoh-12321321",
      nm_pemesan: "John",
      tgl_pemesanan: "22 Maret 2021",
      jm_pemesanan: "18:00",
      status_respons: <Telat />,
      status_cetak: "sudah dicetak",
      produk: [
        {
          nm_produk: "lorem ipsum",
          gmbr_produk: "/img/cms/botol-oli.png",
          jumlah: 2,
          harga: "165.000",
          sub_produk: [
            {
              nm_produk: "lorem ipsum",
              gmbr_produk: "/img/cms/botol-oli.png",
              jumlah: 2,
              harga: "165.000",
            },
          ],
        },
      ],
      alamat: "The Green Sariwangi, Kab. Bandung Barat, Jawa Barat",
      kurir: "JNE Reguler",
      ongkos_kirim: "9.000",
      total_biaya: "235.000",
      sales_by: "Kevin",
      action: <NomorResi />,
    },
  ];
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
      {allPesanan.map((field) => (
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
                      pesanan diproses
                    </Typography>
                  }
                />
                <Link color="inherit" href="/">
                  {field.no_invoice}
                </Link>
                <Link color="inherit" href="/getting-started/installation/">
                  {field.nm_pemesan}
                </Link>
                <Typography color="textPrimary">
                  {field.tgl_pemesanan} | {field.jm_pemesanan}
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item xs={4} className={classes.grid_align_right}>
              {field.status_respons}
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.grid_border_top}>
            <Grid item xs={4}>
              {field.produk.map((sub_field) => (
                <Grid container spacing={3} key={sub_field.nm_produk}>
                  <Grid item xs={3}>
                    <img
                      src={sub_field.gmbr_produk}
                      alt={sub_field.nm_produk}
                      width="50"
                      height="50"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    {sub_field.nm_produk}
                    <br />
                    {sub_field.jumlah} x Rp. {sub_field.harga}
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={5} className={classes.grid_border_left}>
              <Typography color="textPrimary">
                Alamat
                <br />
                {field.alamat}
              </Typography>
            </Grid>
            <Grid item xs={3} className={classes.grid_border_left}>
              <Typography color="textPrimary">
                Kurir {field.kurir}
                <br />
                Rp {field.ongkos_kirim}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              +2 produk lain&nbsp;
              <Link href="#" onClick={() => setLihat(!lihat)}>
                {lihat ? "tutup" : "lihat"}
              </Link>
              {lihat ? (
                <Paper className={classes.paper}>
                  {field.produk.map((sub_field) => (
                    <Grid container spacing={3}>
                      {sub_field.sub_produk.map((sub_produk_field) => (
                        <>
                          <Grid item xs={3}>
                            <img
                              src={sub_produk_field.gmbr_produk}
                              alt={sub_produk_field.nm_produk}
                              width="50"
                              height="50"
                            />
                          </Grid>
                          <Grid item xs={9}>
                            {sub_produk_field.nm_produk}
                            <br />
                            {sub_produk_field.jumlah} x {sub_produk_field.harga}
                          </Grid>
                        </>
                      ))}
                    </Grid>
                  ))}
                </Paper>
              ) : null}
              <br />
              Total bayar
            </Grid>
            <Grid item xs={3} className={classes.grid_align_right}>
              <Typography color="textPrimary">
                <b>Rp. {field.total_biaya}</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid_border_top}
          >
            <Grid item xs={4}>
              sales by: {field.sales_by}
            </Grid>
            {field.action}
          </Grid>
        </Paper>
      ))}
    </>
  );
}
