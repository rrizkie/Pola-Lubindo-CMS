import Search from "../../components/transaksi/Search";
import Filter from "../../components/transaksi/komisi/Filter";
import Table from "../../components/transaksi/komisi/Table";

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
