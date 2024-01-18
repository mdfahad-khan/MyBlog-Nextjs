"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const value = localStorage.getItem("theme");
      return value || "light";
    }
  } catch (error) {
    console.error("Error accessing localStorage:", error);
  }

  // Provide a default value if localStorage is not available or there's an error.
  return "light";
};

export const ThemeContextProvider = ({ children }) => {
  const { theme, setTheme } = useState(() => {
    return getFromLocalStorage();
  });
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
