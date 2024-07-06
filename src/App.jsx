import "./style.scss";
import Register from "./pages/register";
import { useState } from "react";
import Login from "./pages/login";
import Header from "./components/header";
import Sidebar from "./components/admin/sidebar";
import DataSantri from "./components/admin/santri/dataSantri";
import Pembayaran from "./components/admin/pembayaran/pembayaran";
import Nilai from "./components/admin/nilai/nilai";

import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen}>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/santri" element={<DataSantri />} />
            <Route path="/nilai" element={<Nilai />} />
            <Route path="/pembayaran" element={<Pembayaran />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
