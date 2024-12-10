import TabsSkills from "./TabsSkills";
import { useTheme } from "../context/ThemeContext";

function GenerationContent() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col mt-[230px] gap-[40px] mb-6 xl:flex xl:flex-row">
      <div className="text-left w-full">
        <div className="leading-[38px]">
          <p
            className={`text-[28px] font-bitter font-semibold 
            ${theme === "light" ? "text-black" : "text-white"}`}
          >
            Generation Thailand Bootcamp
          </p>
          <p
            className={`text-[24px] font-medium 
             ${theme === "light" ? "text-black" : "text-white"}`}
          >
            Junior Software Developer JSD#8
          </p>
        </div>
        <p
          className={`italic  ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          09 Sep 2024 - Present
        </p>

        <div
          className={`flex flex-col mt-6 gap-3 tracking-wide ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <p>
            Developing a medium-size project for online e-commerce with hands-on
            experience in frontend, backend, and database development.
          </p>
          <p>
            Contributing significantly to the project's success, leading the
            wireframing process and actively participating in project management
            activities such as task breakdown, effort estimation, and timeline
            management from inception to deployment.
          </p>
          <p>
            Collaborating effectively within a team environment. Expected to
            graduate with a strong foundation in full-stack development
            principles and practical project experience.
          </p>
        </div>
      </div>
      <div className="w-full">
        <TabsSkills />
      </div>
    </div>
  );
}

export default GenerationContent;
