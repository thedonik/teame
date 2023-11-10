import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { uid } from "uid";
import getStore from "./utils/get";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [users, setUsers] = useState(getStore("users"));
  const [takeBasket, setTakeBasket] = useState(getStore("cart"));

  const id = uid();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: id, name: name };
    setUsers([...users, newItem]);
    setName("");
    if (users.length > 0) {
      navigate("/add");
    }
  };
  console.log(users);

  const fetched = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(await data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetched();
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        name,
        setName,
        users,
        setUsers,
        handleSubmit,
        takeBasket,
        setTakeBasket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
