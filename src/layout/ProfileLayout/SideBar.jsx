import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../ProfileLayout/profileLayout.css";
import { useDispatch } from "react-redux";
import { setlogoutUser } from "../../redux/reducers/AuthReducer";
import Alert from "../../Components/SweetAlert/Alert";
const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(location, "location");

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setlogoutUser());
    Alert({
      title: "Success",
      text: "you are logout Successfully!",
    });
    navigate("/");
  };

  return (
    <ul className="sidebar__list m-0 p-0">
      <NavLink
        to="/my-profile"
        end
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive || location.pathname === "/" ? "active" : ""
          }`
        }
      >
        <li className="py-md-3 py-2 text-center reg-font">My Profile</li>
      </NavLink>
      <NavLink
        to="/my-orders"
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive ? "active" : ""
          }`
        }
      >
        <li className="py-md-3 py-2">My Orders</li>
      </NavLink>
      <NavLink
        to="/my-course"
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive ? "active" : ""
          }`
        }
      >
        <li className="py-md-3 py-2">My Courses</li>
      </NavLink>
      {/* <NavLink
        to="/my-address"
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive ? "active" : ""
          }`
        }
      >
        <li className="py-md-3 py-2">My Address</li>
      </NavLink> */}
      <NavLink
        to="/my-student"
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive ? "active" : ""
          }`
        }
      >
        <li className="py-md-3 py-2">My Students</li>
      </NavLink>
      <NavLink
        to="/my-wishlist"
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive ? "active" : ""
          }`
        }
      >
        <li className="py-md-3 py-2">My Wishlist</li>
      </NavLink>
      <NavLink
        to="/my-certificates"
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive ? "active" : ""
          }`
        }
      >
        <li className="py-md-3 py-2">mY certificates</li>
      </NavLink>
      <NavLink
        to="#"
        className={({ isActive }) =>
          `level-5-sm d-flex align-items-center justify-content-center reg-font dark-color text-uppercase ${
            isActive ? "active" : ""
          }`
        }
        onClick={handleLogout}
      >
        <li className="py-md-3 py-2">LOGOUT</li>
      </NavLink>
    </ul>
  );
};

export default Sidebar;
