import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Collapse, Grid } from "@material-ui/core";

import UploadFotoProduk from "./produk/UploadFotoProduk";
import InformasiProduk from "./produk/InformasiProduk";
import DetilProduk from "./produk/DetilProduk";
import HargaProduk from "./produk/HargaProduk";
import PengelolaanProduk from "./produk/PengelolaanProduk";
import BeratPengiriman from "./produk/BeratPengiriman";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    borderRight: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menus = [
    {
      value: "Produk",
      sub: [{ value: "Tambah Produk" }, { value: "Daftar Produk" }],
      open: true,
      link: "/produk",
    },
    {
      value: "Penjualan",
      sub: [],
      open: null,
      link: "/penjualan",
    },
    {
      value: "Member",
      sub: [],
      open: null,
      link: "/member",
    },
    {
      value: "Transaksi",
      sub: [],
      open: null,
      link: "/transaksi",
    },
  ];

  const [open, setOpen] = React.useState(true);

  const handleClickProduct = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {menus.map((menu) => (
          <>
            <ListItem
              button
              key={menu.value}
              onClick={menu.value === "Produk" ? handleClickProduct : null}
            >
              <ListItemIcon>
                {menu.value === "Produk" ? (
                  <img
                    src="./img/cms/sidebar/product-icon.png"
                    alt="Product Icon"
                  />
                ) : menu.value === "Penjualan" ? (
                  <img
                    src="./img/cms/sidebar/sales-icon.png"
                    alt="Sales Icon"
                  />
                ) : menu.value === "Member" ? (
                  <img
                    src="./img/cms/sidebar/member-icon.png"
                    alt="Member Icon"
                  />
                ) : (
                  <img
                    src="./img/cms/sidebar/transaction-icon.png"
                    alt="Transaction Icon"
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={<b>{menu.value}</b>} />
              {menu.open === true ? (
                open ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : (
                false
              )}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {menu.sub.map((submenu) => (
                  <ListItem
                    button
                    key={submenu.value}
                    className={classes.nested}
                  >
                    <ListItemText primary={submenu.value} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="inherit"
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            <b>TAMBAH PRODUK</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <UploadFotoProduk />
          </Grid>
          <Grid item xs={12}>
            <InformasiProduk />
          </Grid>
          <Grid item xs={12}>
            <DetilProduk />
          </Grid>
          <Grid item xs={12}>
            <HargaProduk />
          </Grid>
          <Grid item xs={12}>
            <PengelolaanProduk />
          </Grid>
          <Grid item xs={12}>
            <BeratPengiriman />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
