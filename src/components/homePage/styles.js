import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "start",
    margin:"1rem 0 0 0.5rem"
  },
  brandBox:{
      margin:"0 0.3rem",
      textAlign:"center"
  },
  brand:{
      borderRadius:"50%",
      padding:"2rem",
      margin:"1rem 0.5rem 0 0.5rem",
      border:"none",
      backgroundColor:"grey"
  },
  brandText:{
      fontSize:"0.8rem",
      color:"grey",
      alignItems:"center",
      marginTop:"0.3rem"

  },
  produkCard:{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      marginTop:"1rem"
  },
  Fab:{
    border:"none",
    boxShadow:"none",
    backgroundColor:"#f4e8e9"
  },
  // ['@media (min-width:780px)']:{
  //   topRoot:{
  //     display:"flex",
  //     justifyContent:"center",
  //     flexDirection:"column",
  //   },root: {
  //     display: "flex",
  //     justifyContent: "center",
  //     margin:"1rem 0 0 0.5rem"
  //   }
  // }
});
