const CMSReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUK":
      return {
        ...state,
        produk: action.payload,
      }; 
    default:
      return state;
  }
};

export default CMSReducer;
