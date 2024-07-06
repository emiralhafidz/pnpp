// Read.jsx
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useMediaQuery from "@mui/material/useMediaQuery";
import editIcon from "../../../assets/images/edit.png";
import deleteIcon from "../../../assets/images/delete.png";
import { Button, Card, Modal } from "react-bootstrap";
import Create from "./Create";

const columns = [
  { id: "no", label: "No", minWidth: 50, align: "center" },
  { id: "action", label: "Action", minWidth: 50, align: "center" },
  { id: "nama", label: "Nama", minWidth: 300, align: "center" },
  { id: "nis", label: "NIS", minWidth: 150, align: "center" },
  { id: "kelas", label: "Kelas", minWidth: 100, align: "center" },
  { id: "kampus", label: "Kampus", minWidth: 300, align: "center" },
  { id: "kontak", label: "Kontak", minWidth: 120, align: "center" },
  { id: "provinsi", label: "Provinsi", minWidth: 120, align: "center" },
  { id: "kabupaten", label: "Kabupaten", minWidth: 100, align: "center" },
  { id: "kecamatan", label: "Kecamatan", minWidth: 100, align: "center" },
  { id: "kelurahan", label: "Kelurahan", minWidth: 100, align: "center" },
];

function createData(
  no,
  action,
  nama,
  nis,
  kelas,
  kampus,
  kontak,
  provinsi,
  kabupaten,
  kecamatan,
  kelurahan,
) {
  return {
    no,
    action,
    nama,
    nis,
    kelas,
    kampus,
    kontak,
    provinsi,
    kabupaten,
    kecamatan,
    kelurahan,
  };
}

const rows = [
  createData(
    1,
    null,
    "Muhammad Emir Al Hafidz",
    2020001,
    "Prasaringan",
    "Universitas Negeri Yogyakarta",
    "089509812109",
    "Banten",
    "Tangerang",
    "Cisauk",
    "Suradita",
    
  ),
];



const Read = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isMobile = useMediaQuery("(max-width:600px)");

  const [showCreate, setShowCreate] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleCloseCreate = () => setShowCreate(false);
  const handleShowCreate = () => setShowCreate(true);

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="read">
      {/* create data */}
      <div className="addBtn">
        <Button variant="primary" size="sm" onClick={handleShowCreate}>
          Tambah
        </Button>{" "}
        <Button variant="warning" size="sm">
          Print
        </Button>{" "}
      </div>

      {/* Modal Create */}
      <Modal
        show={showCreate}
        onHide={handleCloseCreate}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Buat Data Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Create mode="create" handleClose={handleCloseCreate} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreate}>
            Close
          </Button>
          {/* <Button variant="primary">Save</Button> */}
        </Modal.Footer>
      </Modal>

      {/* Modal Update */}
      <Modal
        show={showUpdate}
        onHide={handleCloseUpdate}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Create mode="update" handleClose={handleCloseUpdate} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          {/* <Button variant="primary">Save</Button> */}
        </Modal.Footer>
      </Modal>

      {/* Modal */}
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah anda yakin ingin menghapus data ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            No
          </Button>
          <Button variant="primary" onClick={handleCloseDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Card>
        <Card.Header className="text-center">
          Data Santri Grha Cendekia
        </Card.Header>
        <Card.Body>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer className="table-container">
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        className={`table-cell ${
                          column.align === "center" ? "table-cell-center" : ""
                        }`}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.no}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className="table-cell"
                            >
                              {column.id === "action" ? (
                                <div className="action">
                                  <img
                                    src={editIcon}
                                    onClick={handleShowUpdate}
                                    alt="Edit"
                                    style={{
                                      cursor: "pointer",
                                      marginRight: "8px",
                                    }}
                                  />
                                  <img
                                    src={deleteIcon}
                                    alt="Delete"
                                    onClick={handleShowDelete}
                                    style={{ cursor: "pointer" }}
                                  />
                                </div>
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Read;
