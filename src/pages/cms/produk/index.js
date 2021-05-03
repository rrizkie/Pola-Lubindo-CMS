import React, { useContext, useEffect } from "react";
import Button from "../../../components/cms/produk/daftar/Button";
import Table from "../../../components/cms/produk/daftar/Table";
import { CMSContext } from "../../../context/state";
export default function Index(params) {
  const { produk } = useContext(CMSContext);
  console.log(produk, "<<< produk from pages");

  return (
    <>
      <Button />
      <Table />
    </>
  );
}
