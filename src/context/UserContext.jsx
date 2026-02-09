import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(null);

  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
    } else {
      alert(data.error);
    }
  };

  const register = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
    } else {
      alert(data.error);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
  };

  const getProfile = async (tk) => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${tk}`,
      },
    });

    const data = await res.json();

    if (res.ok) {
      setEmail(data.email);
    } else {
      logout();
    }
  };

  useEffect(() => {
    if (token) {
      getProfile(token);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
