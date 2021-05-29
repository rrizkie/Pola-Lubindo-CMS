const CMSReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUK":
      return {
        ...state,
        produk: action.payload,
      };
    case "FETCH_TRANSAKSI":
      return {
        ...state,
        transaksi: action.payload,
      };
    case "FETCH_BRAND":
      return {
        ...state,
        brand: action.payload,
      };
    case "FETCH_TRANSAKSI_KOMISI":
      return {
        ...state,
        transaksiKomisi: action.payload,
      };

    default:
      return state;
  }
};

export default CMSReducer;
