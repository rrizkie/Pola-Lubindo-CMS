import React, { useContext, useEffect, useState } from "react";
import { CMSContext } from "../../../context/state";
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

  const {} = useContext(CMSContext);

  useEffect(() => {}, []);

  const IOSSwitch = () => {
    return (
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
      />
    );
  };

  const [premiere, setPremiere] = useState(
    row.premiere === true ? true : false
  );

  const handlePremiere = () => {
    setPremiere(!premiere);
  };

  const [status, setStatus] = useState(row.status === true ? true : false);

  const handleStatus = () => {
    setStatus(!status);
  };

  const levels = [
    {
      value: "Level 1",
    },
  ];

  const [level, setLevel] = React.useState("Level 1");

  const handleLevel = (event) => {
    setLevel(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openAction = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeAction = () => {
    setAnchorEl(null);
  };
  return (
    <TableRow key={row.nama}>
      <TableCell>{row.nama}</TableCell>
      <TableCell>{row.tgl_gabung}</TableCell>
      <TableCell>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <img src="/img/cms/WhatsApp.svg" alt="WhatsApp" width="30" />
          </Grid>
          <Grid item xs={9}>
            {row.whatsapp}
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
            {row.diskon}
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined">ubah</Button>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell>
        <IOSSwitch checked={row.premiere} onChange={handlePremiere} />
      </TableCell>
      <TableCell>
        <IOSSwitch checked={row.status} onChange={handleStatus} />
      </TableCell>
      <TableCell>
        <ListIcon onClick={openAction} />
        <Popover
          id="simple-menu"
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
          <MenuItem onClick={closeAction}>Edit</MenuItem>
          <MenuItem onClick={closeAction}>Hapus</MenuItem>
          <MenuItem onClick={closeAction}>Reset Password</MenuItem>
        </Popover>
      </TableCell>
    </TableRow>
  );
}
