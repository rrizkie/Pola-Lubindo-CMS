import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btnNav: { borderRadius: 0, width: "20%" },
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default useStyles;
