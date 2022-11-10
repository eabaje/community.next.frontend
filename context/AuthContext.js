import axios from "axios";
import { createContext, useEffect, useState } from "react";
import axiosInstance from "../helpers/axiosInstance-2";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : {}
  );

  const login = async (form) => {
    const res = axiosInstance().post(`auth/signin`, form);

    console.log('res', res)
    setCurrentUser(res.data.data);
  };

  useEffect(() => {
    typeof window !== "undefined" ||
      localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);
console.log('currentUser', currentUser)
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
