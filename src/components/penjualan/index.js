import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import {
  Button,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Box,
  Breadcrumbs,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@material-ui/core";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";

import useStyles from "./styles";
// import { CMSContext } from "../../context/state";

import { Link } from "react-router-dom";

export default function Index() {
  const classes = useStyles();
  // const { transaksi, fetchTransaksi } = useContext(CMSContext);
  // console.log(transaksi);

  // useEffect(() => {
  //   fetchTransaksi();
  // }, []);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const [filter, setFilter] = React.useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

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

  const views = [
    { value: "semua produk" },
    { value: "aktif" },
    { value: "tidak aktif" },
  ];
  const [view, setView] = React.useState("semua produk");
  return (
    <>
      {views.map((option) => (
        <Button
          key={option.value}
          onClick={() => setView(option.value)}
          style={{
            borderBottom:
              view === option.value ? "2px solid red" : "2px solid black",
            borderRadius: 0,
            color: view === option.value ? "red" : null,
          }}
          className={classes.form_daftar_btn}
        >
          <b>{option.value}</b>
        </Button>
      ))}
      <form className={classes.form_kategori} noValidate autoComplete="off">
        <TextField
          variant="outlined"
          size="small"
          label="Cari nama, produk, nomor resi, invoice"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          variant="outlined"
          size="small"
          select
          value={filter}
          onChange={handleFilter}
          label="pilih filter"
          style={{ width: 120 }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </TextField>
        <TextField
          id="date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          size="small"
        />
        <Button variant="outlined" disableElevation className={classes.button}>
          unduh laporan penjualan
        </Button>
      </form>

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

        <Button variant="outlined" className={classes.form_daftar_btn}>
          cetak resi
        </Button>
        <Button variant="outlined" className={classes.form_daftar_btn}>
          cetak label
        </Button>
      </form>
    </>
  );
}
