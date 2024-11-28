import React, { createContext, useContext, useState, useEffect } from "react";

// สร้าง Context สำหรับ Theme
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    // เมื่อ theme เปลี่ยน, เปลี่ยน class dark ใน <html> และปรับสีพื้นหลังของ <body>
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // เพิ่ม dark class ให้ <html>
      document.body.style.backgroundColor = "#001e2b"; // เปลี่ยนพื้นหลังของ body เป็นสีแดง
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = ""; // รีเซ็ตพื้นหลังเป็นค่าสีเดิม
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook เพื่อใช้ Context
export function useTheme() {
  return useContext(ThemeContext);
}
