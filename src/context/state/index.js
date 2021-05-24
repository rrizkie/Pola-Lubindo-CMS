import React, { createContext, useState, useReducer, useContext } from "react";
import CMSReducer from "../reducers";

const initialState = {
  produk: [],
  brand: [],
  transaksi: [],
};

export const CMSContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(CMSReducer, initialState);

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

  return (
    <CMSContext.Provider
      value={{
        produk: state.produk,
        transaksi: state.transaksi,
        fetchProduk,
        fetchTransaksi,
        autoLogin,
      }}
      {...{ children }}
    />
  );
};
