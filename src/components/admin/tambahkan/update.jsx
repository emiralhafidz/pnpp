import { InputGroup, Form, FloatingLabel, Button } from "react-bootstrap";

const Update = () => {
  return (
    <div className="update">
      <Form.Select aria-label="Default select example" className="mb-3">
        <option>Masukkan Nama</option>
        <option value="1">Muhammad Emir Al Hafidz</option>
        <option value="2">Alvin Hidayatulloh</option>
        <option value="3">Alu Nur Ahmad</option>
      </Form.Select>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="NIS"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Leave a comment here"
            disabled
          />
        </FloatingLabel>
      </InputGroup>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Kelas"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Leave a comment here"
            disabled
          />
        </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Username dan Password</InputGroup.Text>
        <Form.Control aria-label="Username" />
        <Form.Control aria-label="Password" />
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
