import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const login = () => {
    // Logic to log in the user
  };

  const logout = () => {
    // Logic to log out the user
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, toggleAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
