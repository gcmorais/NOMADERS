/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { BiSolidDownArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import AccountModal from "../modal/accountModal";
import ConfirmModal from "../modal/confirmModal";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const accountHandle = () => {
    setOpen(false);
    setOpenModal(true);
  };

  const confirmHandle = () => {
    setOpen(false);
    setOpenConfirmDeleteModal(true);
  };

  const navigate = useNavigate();

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            size="small"
            onClick={handleToggle}
            data-testid="open-popup"
          >
            <BiSolidDownArrow />
          </Button>
          <Popper
            data-testid="popup-is-open"
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={accountHandle}>Minha conta</MenuItem>
                      <MenuItem
                        onClick={confirmHandle}
                        data-testid="close-popup"
                      >
                        Sair
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
      <AccountModal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
      />
      <ConfirmModal
        isOpen={openConfirmDeleteModal}
        setModalOpen={() => setOpenConfirmDeleteModal(!openConfirmDeleteModal)}
      />
    </>
  );
}
