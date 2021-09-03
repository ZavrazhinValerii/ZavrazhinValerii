import { createContext } from "react";

export const MyThemeContext = createContext({ theme: "light" });

export const MyAnotherContext = createContext({ name: "Vasya" });