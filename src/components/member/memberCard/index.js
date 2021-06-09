import React, { useContext, useState } from "react";

import { CMSContext } from "../../../context/state";

// MATERIAL UI
import {
  Button,
  Grid,
  Switch,
  TableCell,
  TableRow,
  MenuItem,
  TextField,
  Popover,
} from "@material-ui/core";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListIcon from "@material-ui/icons/List";

import useStyles from "./styles";

export default function Index({ row }) {
  const classes = useStyles();

  const { ubahStatusPremiere, ubahStatus, deleteMember } =
    useContext(CMSContext);

  // PREMIERE
  const [statusPremier, setPremiereStatus] = useState(
    row.statusPremier === "aktif" ? true : false
  );
  const handlePremiereStatus = () => {
    setPremiereStatus(!statusPremier);
    ubahStatusPremiere(
      statusPremier
        ? { statusPremier: "aktif", id: row.id }
        : { statusPremier: null, id: row.id }
    );
  };

  // STATUS
  const [status, setStatus] = useState(row.status === true ? true : false);
  const handleStatus = () => {
    setStatus(!status);
    ubahStatus({ status: !status });
  };

  // LEVEL
  const levels = [
    {
      value: "Level 1",
    },
  ];
  const [level, setLevel] = React.useState("Level 1");
  const handleLevel = (event) => {
    setLevel(event.target.value);
  };

  // AKSI
  const actions = [
    { value: "edit" },
    { value: "hapus" },
    { value: "reset password" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAction = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeAction = (input) => {
    setAnchorEl(null);
    console.log(input);
    if (input === "hapus") {
      deleteMember(row.id);
    }
  };
  return (
    <TableRow key={row.nama}>
      <TableCell>{row.nama}</TableCell>
      <TableCell>{row.createdAt}</TableCell>
      <TableCell>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <img src="/img/cms/WhatsApp.svg" alt="WhatsApp" width="30" />
          </Grid>
          <Grid item xs={9}>
            {row.phone}
          </Grid>
          <Grid item xs={3}>
            <MailOutlineIcon />
          </Grid>
          <Grid item xs={9}>
            {row.email}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            {row.total}
          </Grid>
          <Grid item xs={12}>
            {row.sisa}
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <TextField
          select
          variant="outlined"
          value={level}
          size="small"
          onChange={handleLevel}
        >
          {levels.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </TableCell>
      <TableCell>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            {row.discount} produk
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined">ubah</Button>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          checked={statusPremier}
          onChange={handlePremiereStatus}
        />
      </TableCell>
      <TableCell>
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          checked={status}
          onChange={handleStatus}
        />
      </TableCell>
      <TableCell>
        <ListIcon onClick={openAction} />
        <Popover
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={closeAction}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {actions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={() => closeAction(option.value)}
            >
              {option.value}
            </MenuItem>
          ))}
        </Popover>
      </TableCell>
    </TableRow>
  );
}
