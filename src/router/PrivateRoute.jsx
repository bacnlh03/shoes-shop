import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../features/auth/authStore";

const PrivateRoute = () => {
  const { token } = useAuthStore();

  if (!token) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;
};

export default PrivateRoute;