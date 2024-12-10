import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTheme } from "../context/ThemeContext";
import { base, track } from "framer-motion/client";
import { color } from "framer-motion";

function WorkExperienceContent() {
  const { theme } = useTheme();

  const itemClasses = {
    base: "py-0 px-0 w-full",
    title: "font-normal text-medium px-3",
    trigger: "bg-white rounded-t-sm pr-3",
    indicator: "text-medium px-0",
    content: "text-small bg-white px-3 rounded-b-sm bb-[-1px]",
  };

  const defaultContent = [
    {
      company: "EASYRICE DIGITAL TECHNOLOGY",
      date: "Aug 2023 - May 2024",
      role: "UX/UI Designer",
      description: [
        "Gathered requirements from Product Owners (PO) and designed wireframes to ensure user-friendliness while meeting customer specifications.",
        "Conducted user research to gather insights, directly informing design decisions and boosting team efficiency and user experience.",
        "Collaborated with developer teams to find optimal solutions and conducted UAT testing before deploying projects.",
      ],
    },
    {
      company: "TPN FLEXPAK Company Limited",
      date: "Sep 2022 - Dec 2022",
      role: "Research & Development",
      description: [
        "Designed and supervised production, collecting experimental data to evaluate new packaging development. Presented results to the sales team and relevant departments, verifying if outcomes met requirements and analyzing material trends based on customer preferences.",
        "Provided technical support and recommendations to the sales team to ensure clear communication of results with clients.",
      ],
    },
    {
      company: "THAI O.P.P Public Company Limited",
      date: "July 2019 - Aug 2022",
      role: "New Product Development",
      description: [
        "Managed customer requests during the printing process, planning and ensuring production met quality standards and customer requirements, resulting in a reduction in print preparation time.",
        "Explained the limitations of the printing process to customers and the sales team to improve understanding and reduce miscommunication.",
        "Supported customers during site visits to the printing process, providing solutions when products didn’t meet their requirements, enhancing customer satisfaction.",
      ],
    },
  ];
  return (
    <div className="text-left mt-[80px]">
      <div
        className={`text-[32px] font-bitter font-semibold 
          ${theme === "light" ? "text-black" : "text-white"}`}
      >
        EXPERIENCES
      </div>
      {defaultContent.map((item, index) => (
        <div
          className={`mt-4 hover:shadow-xl shadow-black-500/40 cursor-pointer ${
            theme === "light"
              ? "text-black border-1 border-slate-500 rounded-xl"
              : "text-white"
          }`}
          key={index}
        >
          <Accordion itemClasses={itemClasses} variant="">
            <AccordionItem
              textValue={item.company}
              title={
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex-col text-left w-[55%] md:w-full">
                    <p className="text-black font-bold text-[14px] leading-4 xl:text-[16px]">
                      {item.company}
                    </p>
                    <p className="text-gray-600 text-[14px] leading-4 pt-2 xl:text-[16px]">
                      {item.role}
                    </p>
                  </div>
                  <p className="text-gray-600 text-[12px] w-[30%] leading-5 md:w-full md:text-right xl:text-[16px]">
                    {item.date}
                  </p>
                </div>
              }
              subtitle={<div className="flex justify-between"></div>}
            >
              <ul className="list-disc pl-6 text-black text-left text-[14px] xl:text-[16px]">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default WorkExperienceContent;
