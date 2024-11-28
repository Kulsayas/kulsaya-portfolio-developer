import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  // const [theme, setTheme] = useState("dark");

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  // };

  return (
    <div className="flex justify-between">
      <button
        className={`text-left text-[14px] font-bold
        ${theme === "light" ? "text-green-950" : "text-white"}`}
      >
        <p>KULSAYA</p>
        <p>SEENUAL</p>
      </button>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <TbMoonStars className="size-[24px] hover:text-[#00ed64] text-black" />
        ) : (
          <BsSun className="size-[24px] hover:text-[#00ed64]" />
        )}
      </button>
    </div>
  );
}
