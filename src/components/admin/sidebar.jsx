import IconGraduate from "../../assets/images/graduate.png";
import IconAdd from "../../assets/images/add.png";
import IconCash from "../../assets/images/cash.png";
import IconScore from "../../assets/images/score.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkItem = [
  {
    id: "/santri",
    icon: IconGraduate,
    name: "Data Santri",
  },
  {
    id: "/pembayaran",
    icon: IconCash,
    name: "Pembayaran",
  },
  {
    id: "/nilai",
    icon: IconScore,
    name: "Nilai",
  },
  {
    id: "/tambahkan",
    icon: IconAdd,
    name: "Tambahkan",
  },
];



const AdminPage = ({ isOpen, children }) => {
  return (

    <div className="mainPage">
     {/* <Header toggleSidebar={toggleSidebar} /> */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <ul>
          {LinkItem.map((item, index) => (
            <li key={index}>
              <Link to={item.id}>
                <img src={item.icon} alt={item.name} />
                <div>{item.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pages">{children}</div>
    </div>
  );
};

export default AdminPage;
