import React from "react";
import { useState, useEffect } from "react";
import axiosClient from "../api/axiosClient.js";
import categoryContext from "../store/categoryContext.jsx";

export default function CategoryProvider({ children }) {
  const [categories, updateCategories] = useState([]);
  const [error, updateError] = useState();

  useEffect(() => {
    const LoadCategories = async () => {
      try {
        const res = await axiosClient.get("/categories");
        updateCategories(res.data);
      } catch (error) {
        updateError(error.message);
      }
    };

    LoadCategories();
  }, []);

  return (
    <categoryContext.Provider value={{ categories: categories, error: error }}>
      {children}
    </categoryContext.Provider>
  );
}
