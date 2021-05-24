import React, { useContext, useEffect, useState } from "react";
import { CMSContext } from "../../context/state";
import Kategori from "../../components/penjualan/Kategori";
import Daftar from "../../components/penjualan/Daftar";
import Filter from "../../components/penjualan/filter";
import Button from "../../components/penjualan/Button";

export default function Index(params) {
  const { transaksi, fetchTransaksi } = useContext(CMSContext);
  const [kategori, setKategori] = useState(0);
  console.log(kategori, "kategori");

  const pesananBaru = transaksi.filter(
    (item) => item.statusPesanan === "menunggu konfirmasi"
  );
  const siapDikirim = transaksi.filter(
    (item) => item.statusPesanan === "pesanan di konfirmasi"
  );

  useEffect(() => {
    fetchTransaksi();
  }, []);
  return (
    <>
      <Button />
      <Kategori ubahKategori={setKategori} />
      <Filter />
      {kategori === "Siap dikirim"
        ? siapDikirim.map((item) => <Daftar key={item.id} item={item} />)
        : kategori === "Pesanan baru"
        ? pesananBaru.map((item) => <Daftar key={item.id} item={item} />)
        : transaksi.map((item) => <Daftar key={item.id} item={item} />)}
    </>
  );
}
