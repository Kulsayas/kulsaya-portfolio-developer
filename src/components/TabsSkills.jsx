import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { TbDatabaseSmile } from "react-icons/tb";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import { SiPostman } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

function TabsSkills() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      <Tabs
        classNames={{
          tabContent: `text-white ${
            theme === "light" ? "text-black" : "text-white"
          }`,
        }}
        color="success"
        variant="light"
        aria-label="Options"
      >
        <Tab title="Contact" className="text-[16px]">
          <Card
            className={`bg-white/20 text-whitehover:shadow-xl shadow-black-500/40 cursor-pointer 
            ${
              theme === "light"
                ? "text-black border-1 border-slate-500"
                : "text-white"
            }`}
          >
            <CardBody className="text-left gap-2 p-3">
              <div className="flex items-center gap-2">
                <AiOutlineMail size={20} />:
                <span className="text-[14px]">Kulsaya.see@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <TbPhoneCall size={20} />:
                <span className="text-[14px]">(+66)89-623-2139</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin size={20} />:
                <a
                  href="www.linkedin.com/in/kulsaya-seenual"
                  className="text-[14px]"
                >
                  www.linkedin.com/in/kulsaya-seenual
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub size={20} />:
                <a href="https://github.com/Kulsayas" className="text-[14px]">
                  https://github.com/Kulsayas
                </a>
              </div>
              <div className="flex items-center gap-2">
                <LuMapPin size={20} className="flex-shrink-0" />:
                <span className="text-[14px] flex-grow">
                  Udomsuk 37, Phra Khanong, Bang Chak, Bangkok 10260
                </span>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab title="Technical Skills" className="text-[16px]">
          <Card
            className={`bg-white/20 text-whitehover:shadow-xl shadow-black-500/40 cursor-pointer 
            ${
              theme === "light"
                ? "text-black border-1 border-slate-500"
                : "text-white"
            }`}
          >
            <CardBody className="p-4">
              <div className="items-center gap-2">
                <div className="mb-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <IoCodeSlashOutline size={20} />
                    Front-end
                  </p>
                  <ul className="list-disc pl-6 font-light">
                    <li>HTML, CSS, JavaScript, TypeScript</li>
                    <li>React</li>
                  </ul>
                </div>
                <div className="mb-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <TbDatabaseSmile size={20} />
                    Back-end & Database
                  </p>
                  <ul className="list-disc pl-6 font-light">
                    <li>NodeJS, Express.js</li>
                    <li>MySQL,MongoDB </li>
                  </ul>
                </div>
                <div className="mb-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <IoIosGitBranch size={20} />
                    Version Control
                  </p>
                  <ul className="list-disc pl-6 font-light">
                    <li>Git, GitHub </li>
                  </ul>
                </div>
                <div className="mb-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <SiPostman size={20} />
                    API
                  </p>
                  <ul className="list-disc pl-6 font-light">
                    <li>Postman</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabsSkills;
