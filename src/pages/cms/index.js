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
import { useTheme } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Collapse } from "@material-ui/core";

import TambahProduk from "./produk/tambah";
import DaftarProduk from "./produk";

import TambahMember from "./member/tambah";
import DaftarMember from "./member";

import Penjualan from "./penjualan";

import TransaksiKomisi from "./transaksi/komisi";
import TransaksiPenjualan from "./transaksi";

import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import useStyles from "./styles";

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [product, setProduct] = React.useState(false);
  const [member, setMember] = React.useState(false);
  const [transaksi, setTransaksi] = React.useState(false);

  const handleClickProduct = () => {
    setProduct(!product);
  };

  const handleClickMember = () => {
    setMember(!member);
  };

  const handleClickTransaksi = () => {
    setTransaksi(!transaksi);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menus = [
    {
      value: "Produk",
      sub: [
        {
          value: "Tambah Produk",
          link: "produk/tambah",
          component: <TambahProduk />,
        },
        {
          value: "Daftar Produk",
          link: "produk",
          component: <DaftarProduk />,
        },
      ],
      expand: true,
      icon: "/img/cms/sidebar/product-icon.png",
    },
    {
      value: "Penjualan",
      sub: [],
      link: "penjualan",
      component: <Penjualan />,
      icon: "/img/cms/sidebar/sales-icon.png",
    },
    {
      value: "Member",
      sub: [
        {
          value: "Tambah Member",
          link: "member/tambah",
          component: <TambahMember />,
        },
        {
          value: "Daftar Member",
          link: "member",
          component: <DaftarMember />,
        },
      ],
      expand: true,
      icon: "/img/cms/sidebar/member-icon.png",
    },
    {
      value: "Transaksi",
      sub: [
        {
          value: "Komisi",
          link: "transaksi/komisi",
          component: <TransaksiKomisi />,
        },
        {
          value: "Penjualan",
          link: "transaksi",
          component: <TransaksiPenjualan />,
        },
      ],
      expand: true,
      icon: "/img/cms/sidebar/transaction-icon.png",
    },
  ];

  let { url } = useRouteMatch();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {menus.map((menu) => (
          <>
            <ListItem
              button
              key={menu.value}
              onClick={
                menu.value === "Produk"
                  ? handleClickProduct
                  : menu.value === "Member"
                  ? handleClickMember
                  : menu.value === "Transaksi"
                  ? handleClickTransaksi
                  : null
              }
              component={menu.expand === true ? null : Link}
              to={menu.expand === true ? null : `${url}/${menu.link}`}
            >
              <ListItemIcon>
                <img src={menu.icon} alt={menu.value} />
              </ListItemIcon>
              <ListItemText primary={<b>{menu.value}</b>} />
              {menu.value === "Produk" ? (
                product ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : menu.value === "Member" ? (
                member ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : menu.value === "Transaksi" ? (
                transaksi ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItem>
            <Collapse
              in={
                menu.value === "Produk"
                  ? product
                  : menu.value === "Member"
                  ? member
                  : menu.value === "Transaksi"
                  ? transaksi
                  : null
              }
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {menu.sub.map((submenu) => (
                  <ListItem
                    button
                    key={submenu.value}
                    className={classes.nested}
                    component={Link}
                    to={`${url}/${submenu.link}`}
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
            {menus.map((menu) => (
              <Switch>
                <Route path={`${url}/${menu.link}`}>
                  <b>{menu.value}</b>
                </Route>
                {menu.sub.map((submenu) => (
                  <Route path={`${url}/${submenu.link}`}>
                    <b>{submenu.value}</b>
                  </Route>
                ))}
              </Switch>
            ))}
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
        {menus.map((menu) => (
          <Switch>
            <Route path={`${url}/${menu.link}`}>{menu.component}</Route>
            {menu.sub.map((submenu) => (
              <Route path={`${url}/${submenu.link}`}>{submenu.component}</Route>
            ))}
          </Switch>
        ))}
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
