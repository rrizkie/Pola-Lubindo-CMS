import React, { useContext, useState } from "react";
import { useStyles } from "./styles";
import { Paper, Typography, InputBase, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import { Context } from "../../context/globalState";

const AlamatPengiriman = () => {
  const classes = useStyles();
  const history = useHistory();
  const { addAddress } = useContext(Context);
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [jalan, setJalan] = useState("");
  const [detail, setDetail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    addAddress({ kabupaten, kecamatan, jalan, detail });
    history.push("/cart");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Paper className={classes.nav}>
        <div className={classes.left}>
          <Typography className={classes.leftContent}>
            <ArrowBackIcon
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/cart")}
            />
          </Typography>
          <Typography className={classes.leftContent}>
            Alamat Pengiriman
          </Typography>
        </div>
      </Paper>
      <Paper className={classes.box1} elevation={3}>
        <Typography className={classes.boxText}>Informasi Pembeli</Typography>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>Kota / Kabupaten</Typography>
          <InputBase
            className={classes.form}
            name="kabupaten"
            value={kabupaten}
            onChange={(e) => setKabupaten(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>Kecamatan</Typography>
          <InputBase
            className={classes.form}
            name="kecamatan"
            value={kecamatan}
            onChange={(e) => setKecamatan(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>
            Nama Jalan / No. Rumah / Unit
          </Typography>
          <InputBase
            className={classes.form}
            name="jalan"
            value={jalan}
            onChange={(e) => setJalan(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <Typography className={classes.formText}>
            Detail (Patokan/ Blok/ Unit No)
          </Typography>
          <InputBase
            className={classes.form}
            name="detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
      </Paper>
      <Button className={classes.btn} onClick={onSubmit}>
        Simpan Alamat
      </Button>
    </div>
  );
};

export default AlamatPengiriman;
