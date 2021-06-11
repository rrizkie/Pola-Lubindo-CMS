import React, { createContext, useReducer } from "react";
import CMSReducer from "../reducers";
import Axios from "axios";

const initialState = {
  produk: [],
  brand: [],
  transaksi: [],
  transaksiKomisi: [],
  member: [],
};

export const CMSContext = createContext(initialState);

const baseUrl = `157.230.248.17`;

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(CMSReducer, initialState);
  console.log(state, "global state");

  // AUTHENTICATION
  const autoLogin = async () => {
    const loginData = {
      email: "admin@mail.com",
      password: "1234",
    };
    let data = await fetch(baseUrl + `/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    data = await data.json();
    localStorage.setItem("access_token", data.access_token);
  };

  // PRODUK
  const fetchProduk = async () => {
    let data = await fetch(baseUrl + "/produk");
    data = await data.json();
    dispatch({ type: "FETCH_PRODUK", payload: data });
  };

  const ubahStatusProduk = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/ubah-status-produk/${newData.id}`, {
      method: "PUT",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    data = await data.json();
    fetchProduk();
  };

  const deleteproduk = async (id) => {
    const access_token = localStorage.getItem("access_token");
    const data = await fetch(baseUrl + `/produk/${id}`, {
      method: "DELETE",
      headers: { access_token, "Content-Type": "application/json" },
    });
    fetchProduk();
  };

  const tambahProduk = async (input) => {
    const access_token = localStorage.getItem("access_token");
    const data = await Axios(baseUrl + "/produk", {
      method: "POST",
      headers: { access_token },
      data: input,
    });
    fetchProduk();
  };

  // MEMBER
  const fetchMember = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + "/customer", {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    console.log(data, "<<<");
    data = await data.json();
    dispatch({ type: "FETCH_MEMBER", payload: data });
  };

  const tambahMember = async (input) => {
    const access_token = localStorage.getItem("access_token");
    let data = await Axios(baseUrl + "/add-customer", {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      data: input,
    });

    console.log(data, "<<<");
    fetchMember();
  };

  const ubahStatusPremiere = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/ubah-status-premier`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    console.log(data);
    fetchMember();
  };

  const ubahStatus = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/ubah-status-customer`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    console.log(data);
    fetchMember();
  };

  // TRANSAKSI
  const fetchTransaksi = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/transaksi`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_TRANSAKSI", payload: data });
  };

  const fetchTransaksiKomisi = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/all-transaksi`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_TRANSAKSI_KOMISI", payload: data });
  };

  const konfirmasiTransaksi = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/konfirmasi-transaksi`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    data = await data.json();
    fetchTransaksi();

    return data;
  };

  const tolakPesanan = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/tolak-pesanan`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    data = await data.json();
    return data;
  };

  const ubahStatusPembayaran = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/ubah-status-pembayaran`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    fetchTransaksi();
  };

  const inputResi = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/input-resi`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    data = await data.json();
    return data;
  };

  // BRAND
  const fetchBrand = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(baseUrl + `/brand`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_BRAND", payload: data });
  };

  return (
    <CMSContext.Provider
      value={{
        produk: state.produk,
        brand: state.brand,
        member: state.member,
        transaksi: state.transaksi,
        transaksiKomisi: state.transaksiKomisi,

        // PRODUK
        fetchProduk,
        ubahStatusProduk,
        deleteproduk,
        tambahProduk,

        // MEMBER
        fetchMember,
        tambahMember,
        ubahStatusPremiere,
        ubahStatus,

        // TRANSAKSI
        fetchTransaksi,
        fetchBrand,
        fetchTransaksiKomisi,
        konfirmasiTransaksi,
        tolakPesanan,
        ubahStatusPembayaran,
        inputResi,

        autoLogin,
      }}
      {...{ children }}
    />
  );
};
