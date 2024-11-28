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
      date: "Sep 2023 - May 2024",
      role: "UX/UI Designer",
      description: [
        "Gathered requirements from Product Owners (PO) and designed wireframes to ensure user-friendliness while meeting customer specifications.",
        "Collaborated with development teams to find optimal solutions and conducted UAT testing before deploying projects.",
        "Conducted interview tests with customers and engaged in preliminary research to gather feedback on new features.",
        "Skills Gained from Work Experience include User Research, User Interviews, Wireframing, A/B Testing, and Usability Testing.",
      ],
    },
    {
      company: "TPN FLEXPAK Company Limited",
      date: "Sep 2022 - Dec 2022",
      role: "Research & Development",
      description: [
        "Design, supervision, production, and collection of experimental data to summarize the development of new packaging.",
        "Providing technical support and recommendations to sales and  other relevant departments in relation to work.",
      ],
    },
    {
      company: "THAI O.P.P Public Company Limited",
      date: "July 2019 - Aug 2022",
      role: "New Product Development",
      description: [
        "Receive customer requests from tha sales team during the printing process. Planning to facilitate the production process and check quality to the customer’s standards and requirements.",
        "Explain the limitations of the printing process to customers and sales.",
        "support customer when they come to see the real printing process and find solution when a product doesn’t meet customer requirements. ",
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
