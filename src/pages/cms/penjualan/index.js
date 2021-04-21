import Kategori from "../../../components/cms/penjualan/Kategori";
import Daftar from "../../../components/cms/penjualan/Daftar";
import { Button } from "@material-ui/core";

export default function Index(params) {
  return (
    <>
      <Button variant="outlined" disableElevation style={{ marginBottom: 20 }}>
        unduh laporan penjualan
      </Button>
      <Kategori />
      <Daftar />
    </>
  );
}
