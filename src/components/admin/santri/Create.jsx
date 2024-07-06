import { useState } from "react";
import { InputGroup, Form, FloatingLabel, Button } from "react-bootstrap";
import axios from "axios";

const Create = () => {
  const [data, setData] = useState({
    nama: "",
    nis: "",
    kelas: "",
    universitas: "",
    kontak: "",
    provinsi: "",
    kabupaten: "",
    kecamatan: "",
    kelurahan: "",
  });

  const insertData = async() => {
    try {
      const url = "http://localhost:3000/data/insert";
      const response = await axios.post(url,data);
      setData(response.data);
      alert("Data berhasil disimpan!");

    } catch (error) {
      console.log("Gagal insert data", error);
    }
  };
  // insertData();

  return (
    <div className="create">
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Nama"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here"  value={data.nama}
          onChange={(e) => setData({ ...data, nama: e.target.value })}/>
        </FloatingLabel>
      </InputGroup>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="NIS"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here" value={data.nis}
          onChange={(e) => setData({ ...data, nis: e.target.value })}/>
        </FloatingLabel>
      </InputGroup>
      <Form.Select aria-label="Default select example" className="mb-3" value={data.kelas}
          onChange={(e) => setData({ ...data, kelas: e.target.value })}>
        <option disabled>Open this select menu</option>
        <option value="pegon">Pegon Bacaan</option>
        <option value="lambatan">Lambatan</option>
        <option value="cepatan">Cepatan</option>
        <option value="prasaringan">Prasaringan</option>
      </Form.Select>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Kampus"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here" value={data.universitas}
          onChange={(e) => setData({ ...data, universitas: e.target.value })}/>
        </FloatingLabel>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Provinsi dan Kabupaten</InputGroup.Text>
        <Form.Control aria-label="Provinsi" value={data.provinsi}
          onChange={(e) => setData({ ...data, provinsi: e.target.value })}/>
        <Form.Control aria-label="Kabupaten" value={data.kabupaten}
          onChange={(e) => setData({ ...data, kabupaten: e.target.value })}/>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Kecamtan dan Kelurahan</InputGroup.Text>
        <Form.Control aria-label="Kecamatan" value={data.kecamatan}
          onChange={(e) => setData({ ...data, kecamatan: e.target.value })}/>
        <Form.Control aria-label="Kelurahan" value={data.kelurahan}
          onChange={(e) => setData({ ...data, kelurahan: e.target.value })}/>
      </InputGroup>
      <InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="No Telephone"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Leave a comment here" value={data.kontak}
          onChange={(e) => setData({ ...data, kontak: e.target.value })}/>
        </FloatingLabel>
      </InputGroup>
      <div style={{ textAlign: "left" }}>
        <Button variant="primary" size="sm" onClick={insertData}>
          simpan
        </Button>
      </div>
    </div>
  );
};

export default Create;
