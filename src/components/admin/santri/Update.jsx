import { InputGroup, Form, FloatingLabel, Button } from "react-bootstrap";

const Update = () => {
  return (
    <div className="update">
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Nama"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here" />
        </FloatingLabel>
      </InputGroup>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="NIS"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here" />
        </FloatingLabel>
      </InputGroup>
      <Form.Select aria-label="Default select example"  className="mb-3">
      <option disabled>Open this select menu</option>
      <option value="1">Lambatan</option>
      <option value="2">Cepatan</option>
      <option value="3">Prasaringan</option>
    </Form.Select>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Kampus"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here" />
        </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Provinsi dan Kabupaten</InputGroup.Text>
        <Form.Control aria-label="Provinsi" />
        <Form.Control aria-label="Kabupaten" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Kecamtan dan Kelurahan</InputGroup.Text>
        <Form.Control aria-label="Provinsi" />
        <Form.Control aria-label="Kabupaten" />
      </InputGroup>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="No Telephone"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here" />
        </FloatingLabel>
      </InputGroup>
      <div style={{ textAlign: "left" }}>
        <Button variant="primary" size="sm">
          simpan
        </Button>
      </div>
    </div>
  );
};

export default Update;
