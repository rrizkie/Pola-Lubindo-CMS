import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#f4e8e9",
    border: "none",
    boxShadow: "none",
    margin: "-0.5rem -1rem",
    padding:'0 0 0.5rem 0'
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    color: "#ed292f",
    fontSize: "1rem",
    fontWeight:"bold"
  },
  button:{
    fontSize:"0.7rem",
    color:"red",
    fontWeight:"bold",
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "90vw",
    border: "1px solid black",
    justifyContent: "space-between",
    boxShadow: "none",
  },
  searchContent: {
    padding: "0 0.4rem",
  },
  // ['@media (min-width:780px)']:{
  //   navbar: {
  //     backgroundColor: "#f4e8e9",
  //     border: "none",
  //     boxShadow: "none",
  //     margin: "-0.5rem -1rem",
  //     padding:'0 0 0.5rem 0',
  //     width:"40%",
  //   },
  //   search: {
  //     padding: "2px 4px",
  //     display: "flex",
  //     alignItems: "center",
  //     width: "90%",
  //     border: "1px solid black",
  //     justifyContent: "space-between",
  //     boxShadow: "none",
  //   },
  //   topRoot:{
  //     display:"flex",
  //     justifyContent:"center"
  //   },
    
  // }
}));
