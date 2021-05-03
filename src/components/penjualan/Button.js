import { Button } from "@material-ui/core";
import useStyles from "./styles";

export default function Index(params) {
  const classes = useStyles();
  return (
    <Button variant="outlined" disableElevation className={classes.button}>
      unduh laporan penjualan
    </Button>
  );
}
