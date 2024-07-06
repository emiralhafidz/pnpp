import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export const ModalsCreate = ({ showCreate, handleCloseCreate }) => {
  return (
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
  );
};
ModalsCreate.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export const ModalsUpdate = ({ showUpdate, handleCloseUpdate }) => {
  return (
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
  );
};
ModalsUpdate.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export const ModalsDelete = ({ showDelete, handleCloseDelete }) => {
  return (
    <Modal show={showDelete} onHide={handleCloseDelete}>
      <Modal.Header closeButton>
        <Modal.Title  >Delete Data</Modal.Title>
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
  );
};
ModalsDelete.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export const ModalsLogout = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} size="sm">
      <Modal.Header closeButton  className="bg-warning ">
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>Apakah anda ingin keluar ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
ModalsLogout.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
