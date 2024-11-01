import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./AuthProvider";

const ProtectedRouteAdmin = (props) => {
  const auth = useAuth();
  const { token } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token)
    if (!token) {
      auth.logOut();
      navigate("/home");
    }
    console.log("222: " + token)
    const decodedToken = jwtDecode(token);
    console.log(decodedToken.scope)
    if (token && decodedToken.scope !== "Admin") {
      navigate("/home");
    }
  }, [token, auth, navigate]);

  return <Outlet {...props} />;
};

export default ProtectedRouteAdmin;
