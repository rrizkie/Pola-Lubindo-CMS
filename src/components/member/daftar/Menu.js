import React from "react";

import { IconButton, Menu, MenuItem, Modal } from "@material-ui/core";

import ListIcon from "@material-ui/icons/List";

import ModalContent from "./Modal";

export default function BasicTable() {
  // Button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="aksi" onClick={handleClick}>
        <ListIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenModal}>edit</MenuItem>
        <MenuItem onClick={handleClose}>hapus</MenuItem>
        <MenuItem onClick={handleClose}>reset password</MenuItem>
      </Menu>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalContent />
      </Modal>
    </>
  );
}
