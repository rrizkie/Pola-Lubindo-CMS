import Search from "../../../components/cms/transaksi/Search";
import Filter from "../../../components/cms/transaksi/komisi/Filter";
import Table from "../../../components/cms/transaksi/komisi/Table";

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
