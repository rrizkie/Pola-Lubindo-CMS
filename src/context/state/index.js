import React, { createContext, useState, useReducer, useContext } from "react";
import CMSReducer from "../reducers";
import Axios from "axios";

const initialState = {
  produk: [],
  brand: [],
  transaksi: [],
  transaksiKomisi: [],
};

export const CMSContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(CMSReducer, initialState);
  console.log(state, "global state");

  const autoLogin = async () => {
    const loginData = {
      email: "admin@mail.com",
      password: "1234",
    };
    let data = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    data = await data.json();
    localStorage.setItem("access_token", data.access_token);
  };

  const fetchProduk = async () => {
    let data = await fetch("http://localhost:3000/produk");
    data = await data.json();
    dispatch({ type: "FETCH_PRODUK", payload: data });
  };

  const fetchTransaksi = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/transaksi`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_TRANSAKSI", payload: data });
  };

  const fetchBrand = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/brand`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_BRAND", payload: data });
  };

  const fetchTransaksiKomisi = async () => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/all-transaksi`, {
      method: "GET",
      headers: { access_token, "Content-Type": "application/json" },
    });
    data = await data.json();
    dispatch({ type: "FETCH_TRANSAKSI_KOMISI", payload: data });
  };

  const ubahStatusProduk = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(
      `http://localhost:3000/ubah-status-produk/${newData.id}`,
      {
        method: "PUT",
        headers: { access_token, "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      }
    );
    data = await data.json();
    fetchProduk();
  };

  const deleteproduk = async (id) => {
    const access_token = localStorage.getItem("access_token");
    const data = await fetch(`http://localhost:3000/produk/${id}`, {
      method: "DELETE",
      headers: { access_token, "Content-Type": "application/json" },
    });
    fetchProduk();
  };

  const konfirmasiTransaksi = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/konfirmasi-transaksi`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    data = await data.json();
    return data;
  };

  const tolakPesanan = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/tolak-pesanan`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    data = await data.json();
    return data;
  };

  const inputResi = async (newData) => {
    const access_token = localStorage.getItem("access_token");
    let data = await fetch(`http://localhost:3000/input-resi`, {
      method: "POST",
      headers: { access_token, "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    });
    data = await data.json();
    return data;
  };

  const tambahProduk = async (input) => {
    const access_token = localStorage.getItem("access_token");
    const data = await Axios("http://localhost:3000/produk", {
      method: "POST",
      headers: { access_token },
      data: input,
    });
    fetchProduk();
  };

  return (
    <CMSContext.Provider
      value={{
        produk: state.produk,
        brand: state.brand,
        transaksi: state.transaksi,
        transaksiKomisi: state.transaksiKomisi,
        fetchProduk,
        fetchTransaksi,
        fetchBrand,
        fetchTransaksiKomisi,
        autoLogin,
        tambahProduk,
        konfirmasiTransaksi,
        tolakPesanan,
        inputResi,
        ubahStatusProduk,
        deleteproduk,
      }}
      {...{ children }}
    />
  );
};
