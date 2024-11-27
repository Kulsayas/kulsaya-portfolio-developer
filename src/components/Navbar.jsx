import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { TbMoonStars } from "react-icons/tb";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="flex justify-between">
      <button className="text-left">
        <p className="text-[12px]">KULSAYA</p>
        <p className="text-[12px]">SEENUAL</p>
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
