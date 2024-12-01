import { useTheme } from "../context/ThemeContext";

function Aboutme() {
  const { theme } = useTheme();
  return (
    <div className="mt-[320px]">
      <div
        className={`text-left text-[28px] font-bitter font-semibold 
        ${theme === "light" ? "text-black" : "text-white"}`}
      >
        ABOUT ME
      </div>
      <div className="text-left mt-3">
        <p
          className={`mt-4 xl:text-[20px] xl:mt-2
          ${theme === "light" ? "text-black" : "text-white"}`}
        >
          I'm now focused on becoming a Full-Stack Developer and currently
          studying at the Generation Thailand Bootcamp. I am leveraging my
          design expertise to build user-centric, efficient digital solutions.
          My goal is to deliver end-to-end products that are both comprehensive
          and user-friendly.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
