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
          className={`mt-4 xl:text-[20px] xl:mt-2 tracking-wide
          ${theme === "light" ? "text-black" : "text-white"}`}
        >
          Detail-oriented and analytical problem-solver with 3+ years of
          experience in R&D and 8 months in UI/UX design, transitioning into a
          software development career. Proven ability to manage projects, meet
          deadlines, and collaborate effectively. Equipped with a foundation in
          software full stack development, seeking a full stack developer role
          to apply my skills and contribute to a collaborative team, building
          end-to-end, user-centric software products.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
