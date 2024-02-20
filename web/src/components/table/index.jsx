/* eslint-disable import/no-extraneous-dependencies */
import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import { AiOutlineSearch } from "react-icons/ai";
import { Stack } from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import AddToggleMenu from "./addToggleMenu";
import ProductsService from "../../services/ProductsService";
import EmptyBox from "../../assets/empty-box.svg";
import DeleteProductModal from "../modal/deleteProductModal";
import Spinner from "../spinner";
import { ApiContext } from "../../contexts/ApiContext";
import { FindContext } from "./findSearch";

function createData(name, ean, cost, price, profit, platform, id, date) {
  return {
    name,
    ean,
    cost,
    price,
    profit,
    platform,
    id,
    date,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Nome",
  },
  {
    id: "ean",
    numeric: true,
    disablePadding: false,
    label: "Ean",
  },
  {
    id: "cost",
    numeric: true,
    disablePadding: false,
    label: "Custo",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Preço Venda",
  },
  {
    id: "profit",
    numeric: true,
    disablePadding: false,
    label: "Lucro",
  },
  {
    id: "platform",
    numeric: true,
    disablePadding: false,
    label: "Plataforma",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: false,
    label: "Data",
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: true,
    label: "",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const { search, setSearch } = React.useContext(FindContext);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Produtos
        </Typography>
      )}
      <div className="mr-10 hidden rounded-full border-[1px] border-black/10 dark:border-white/10 md:block">
        <form className="flex">
          <input
            className="w-[150px] rounded-l-full bg-white px-5 py-2 text-[12px] dark:bg-primary-blue dark:text-white/80 lg:w-[300px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            placeholder="Pesquisar..."
          />
          <button
            type="button"
            className="rounded-r-full bg-white p-1 pr-3 dark:bg-primary-blue dark:text-white"
          >
            <AiOutlineSearch />
          </button>
        </form>
      </div>

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon width={1} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip>
          <Stack direction="row" spacing={2}>
            <AddToggleMenu />
          </Stack>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("date");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [deleteProduct, setDeleteProduct] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const { products, isLoading, loadProducts } = React.useContext(ApiContext);
  const { search, setSearch } = React.useContext(FindContext);

  const rows = [];

  products.map((item) =>
    rows.push(
      createData(
        item.name,
        item.ean,
        item.cost,
        item.saleprice,
        item.saleprice - item.cost,
        item.platform,
        item.id,
        item.datevalue,
      ),
    ),
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleChangeDense = (event) => {
  //   setDense(event.target.checked);
  // };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows],
  );

  function handleRemove(row) {
    setDeleteProduct(row);
    setOpenDeleteModal(true);
  }
  async function handleConfirm() {
    try {
      await ProductsService.deleteProduct(deleteProduct.id);
      setOpenDeleteModal(false);
      loadProducts();
    } catch (error) {
      console.log("Ocorreu um erro ao deletar o produto", error);
    }
  }

  const searchLowerCase = search.toLowerCase();

  const findSearch = rows.filter(
    (item) =>
      item.name.toLowerCase().includes(searchLowerCase) ||
      item.platform.toLowerCase().includes(searchLowerCase),
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {isLoading && (
          <div className="flex h-[600px] flex-col items-center justify-center">
            <Spinner />
            <p>Carregando...</p>
          </div>
        )}
        {!isLoading && (
          <Paper sx={{ width: "100%", mb: 0, minHeight: 650 }}>
            <EnhancedTableToolbar
              numSelected={selected.length}
              search={search}
              setSearch={setSearch}
            />
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                {products.length > 0 && (
                  <TableBody key={products.id}>
                    {search.length === 0
                      ? visibleRows.map((row, index) => {
                          const isItemSelected = isSelected(row.id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.id)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.id}
                              selected={isItemSelected}
                              sx={{ cursor: "pointer" }}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                    "aria-labelledby": labelId,
                                  }}
                                />
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.ean}</TableCell>
                              <TableCell align="right">{row.cost}</TableCell>
                              <TableCell align="right">{row.price}</TableCell>
                              <TableCell align="right">{row.profit}</TableCell>
                              <TableCell align="right">
                                {row.platform}
                              </TableCell>
                              <TableCell align="right">
                                {row.date.substr(0, 10)}
                              </TableCell>
                              <TableCell align="right">
                                <Tooltip title="Deletar">
                                  <IconButton onClick={() => handleRemove(row)}>
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                                <Link
                                  to={`/app/nomaders/products/edit/${row.id}`}
                                >
                                  <Tooltip title="Editar">
                                    <IconButton>
                                      <EditIcon />
                                    </IconButton>
                                  </Tooltip>
                                </Link>
                              </TableCell>
                            </TableRow>
                          );
                        })
                      : findSearch.map((row, index) => {
                          const isItemSelected = isSelected(row.id);
                          const labelId = `enhanced-table-checkbox-${index}`;

                          return (
                            <TableRow
                              hover
                              onClick={(event) => handleClick(event, row.id)}
                              role="checkbox"
                              aria-checked={isItemSelected}
                              tabIndex={-1}
                              key={row.id}
                              selected={isItemSelected}
                              sx={{ cursor: "pointer" }}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  color="primary"
                                  checked={isItemSelected}
                                  inputProps={{
                                    "aria-labelledby": labelId,
                                  }}
                                />
                              </TableCell>
                              <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                              >
                                {row.name}
                              </TableCell>
                              <TableCell align="right">{row.ean}</TableCell>
                              <TableCell align="right">{row.cost}</TableCell>
                              <TableCell align="right">{row.price}</TableCell>
                              <TableCell align="right">{row.profit}</TableCell>
                              <TableCell align="right">
                                {row.platform}
                              </TableCell>
                              <TableCell align="right">
                                {row.date.substr(0, 10)}
                              </TableCell>
                              <TableCell align="right">
                                <Tooltip title="Deletar">
                                  <IconButton onClick={() => handleRemove(row)}>
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                                <Link
                                  to={`/app/nomaders/products/edit/${row.id}`}
                                >
                                  <Tooltip title="Editar">
                                    <IconButton>
                                      <EditIcon />
                                    </IconButton>
                                  </Tooltip>
                                </Link>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{
                          height: (dense ? 33 : 53) * emptyRows,
                        }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                )}
                {products.length <= 0 && !isLoading && (
                  <caption className="mb-8 mt-24">
                    <img src={EmptyBox} alt="box" className="ml-[46%]" />
                    <p className="mt-5 text-center">
                      Você ainda não tem nenhum produto cadastrado! Clique no
                      botão
                      <br />
                      <strong className="text-primary-indigo">
                        ‟ADICIONAR”{" "}
                      </strong>
                      para cadastrar o seu primeiro!
                    </p>
                  </caption>
                )}
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[8, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}
        {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      </Box>
      <DeleteProductModal
        title={`Deletar "${deleteProduct?.name}"`}
        isOpen={openDeleteModal}
        setModalOpen={() => setOpenDeleteModal(!openDeleteModal)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
