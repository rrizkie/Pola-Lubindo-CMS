import React, { createContext, useState, useReducer, useContext } from "react";
import CMSReducer from "../reducers";

const initialState = {
  produk: [],
  brand: [],
};

export const CMSContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(CMSReducer, initialState);
  console.log(state, "global state");

  const fetchProduk = () => {
    fetch("http://localhost:3000/produk")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_PRODUK", payload: data });
      });
  };

  return (
    <CMSContext.Provider
      value={{ produk: state.produk, fetchProduk }}
      {...{ children }}
    />
  );
};
