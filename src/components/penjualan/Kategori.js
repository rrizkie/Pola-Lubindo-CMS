import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Tabs,
  Tab,
} from "@material-ui/core";
import useStyles from "./styles";


export default function SimpleTabs({ ubahKategori }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    ubahKategori(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Semua pesanan" value="Semua pesanan"/>
          <Tab label="Pesanan baru" value="Pesanan baru" />
          <Tab label="Siap dikirim" value="Siap dikirim" />
        </Tabs>
      </Paper>
    </div>
  );
}
