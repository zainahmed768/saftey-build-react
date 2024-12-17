import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const user = useSelector((state) => state.AuthReducer);
  return user?.userToken == "" ? <Outlet /> : <Navigate to={"/my-profile"} />;
};
export default AuthRoute;
