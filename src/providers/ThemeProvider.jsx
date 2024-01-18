"use client";
import { ThemeContext } from "@/contex/ThemeContext";
import { useContext } from "react";

export const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}> {children} </div>;
};
