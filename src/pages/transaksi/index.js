import Search from "../../components/transaksi/Search";
import Filter from "../../components/transaksi/penjualan/Filter";
import Table from "../../components/transaksi/penjualan/Table";

export default function Index(params) {
  return (
    <>
      <Search />
      <br />
      <br />
      <Filter />
      <br />
      <Table />
    </>
  );
}
