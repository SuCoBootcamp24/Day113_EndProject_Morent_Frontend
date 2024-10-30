import { useContext, createContext, useState, useEffect } from "react";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");


  const login = async (receivedToken) => {
    localStorage.setItem("token", receivedToken);
  };

  const logOut = () => {
    setToken(null);
    Storage.removeItem("site");
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      fetch(import.meta.env.VITE_BACKEND + "/api/v1/auth/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((response) => {
        if (response.ok) {
          setToken(storedToken);
        } else {
          logOut();
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
