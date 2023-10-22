/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import RegisterProductModal from '../modal/newProductModal';
import RegisterPlataformModal from '../modal/newPlatformModal';
import AddProductModal from '../modal/addProductModal';
import ProductsService from '../../services/ProductsService';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openRegisterProduct, setOpenRegisterProduct] = useState(false);
  const [openRegisterPlataform, setOpenRegisterPlataform] = useState(false);
  const [openAddRegisterProduct, setOpenAddRegisterProduct] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const productModal = () => {
    setOpenRegisterProduct(true);
    setAnchorEl(null);
  };
  const plataformModal = () => {
    setOpenRegisterPlataform(true);
    setAnchorEl(null);
  };
  const plataformAddModal = () => {
    setOpenAddRegisterProduct(true);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  async function handleSubmit(formData) {
    try {
      const product = {
        name: formData.name,
        ean: formData.ean,
        cost: formData.cost,
        salePrice: formData.salePrice,
      };

      const response = await ProductsService.createProduct(product);

      console.log(response);
    } catch {
      console.log('ocorreu erro ao cadastrar produto');
    }
  }
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        ADICIONAR
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={plataformAddModal} disableRipple>
          <EditIcon />
          Produto
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={productModal} disableRipple>
          <EditIcon />
          Novo Produto
        </MenuItem>
        <MenuItem onClick={plataformModal} disableRipple>
          <FileCopyIcon />
          Nova Plataforma
        </MenuItem>
      </StyledMenu>
      <RegisterProductModal
        isOpen={openRegisterProduct}
        setModalOpen={() => setOpenRegisterProduct(!openRegisterProduct)}
        onSubmit={handleSubmit}
      />
      <AddProductModal
        isOpen={openAddRegisterProduct}
        setModalOpen={() => setOpenAddRegisterProduct(!openAddRegisterProduct)}
      />
      <RegisterPlataformModal
        isOpen={openRegisterPlataform}
        setModalOpen={() => setOpenRegisterPlataform(!openRegisterPlataform)}
      />
    </div>
  );
}
