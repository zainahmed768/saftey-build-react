import { NavLink, useLocation } from "react-router-dom";
import "../ProfileLayout/profileLayout.css";
const Sidebar = () => {
  const location = useLocation();
  console.log(location, "location");

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
      >
        <li className="py-md-3 py-2">LOGOUT</li>
      </NavLink>
    </ul>
  );
};

export default Sidebar;
