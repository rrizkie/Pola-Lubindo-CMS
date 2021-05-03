import React from "react";
import PropTypes from "prop-types";
import {
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import useStyles from "./styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [filter, setFilter] = React.useState("");

  const handleFilter = (event) => {
    setFilter(event.target.value);
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
          <Tab label="Semua pesanan" {...a11yProps(0)} />
          <Tab label="Pesanan baru" {...a11yProps(1)} />
          <Tab label="Siap dikirim" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <form className={classes.form_kategori} noValidate autoComplete="off">
            <TextField
              variant="outlined"
              size="small"
              label="Cari nama, produk, nomor resi, invoice"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              size="small"
              select
              value={filter}
              onChange={handleFilter}
              label="pilih filter"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
            />
          </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Paper>
    </div>
  );
}