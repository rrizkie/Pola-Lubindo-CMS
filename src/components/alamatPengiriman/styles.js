import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  nav: {
    border: "none",
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    margin: "-0.5rem -1rem",
    padding: "0.3rem 1.7rem",
    backgroundColor: "#f4e8e9",
  },
  left: {
    display: "flex",
    justifyContent: "space-around",
    color: "red",
    margin: "0.5rem 0 0 0",
  },
  leftContent: {
    margin: "0 0.3rem",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  box1: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2rem 1rem 1rem 1rem",
    padding: "1rem 0.5rem",
    borderRadius: "10px",
  },
  boxText: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "black",
  },
  formBox: {
    margin: "0 0.3rem",
  },
  formText: {
    fontSize: "0.5rem",
    color: "grey",
    margin: "0.3rem 0 0.3rem 0.5rem",
  },
  form: {
    padding: "0.1rem 0.2rem",
    display: "flex",
    alignItems: "center",
    width: "80vw",
    border: "1px solid grey",
    justifyContent: "space-between",
    boxShadow: "none",
    borderRadius: "10px",
  },
  btn: {
    backgroundColor: "green",
    textAlign: "center",
    margin: "0 1rem",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "#fff",
    bottom:"-20rem"
  },
});
