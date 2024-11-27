import { MdSearch } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LiaLaptopCodeSolid } from "react-icons/lia";

const cardExperinces = [
  {
    icon: <MdSearch size={28} />,
    role: "Research & Development",
    description:
      "3 years and 7 months of experience in flexible packaging and Process Engineer.",
  },
  {
    icon: <FiLayers size={28} />,
    role: "UX / UI Designer",
    description:
      "8 months in AgriTech company User Research, Wireframe, User Interview, User Experince",
  },
  {
    icon: <LiaLaptopCodeSolid size={28} />,
    role: "Front-End Developer",
    description:
      "Generation Thailand Bootcamp Junior Software Developer JSD#8 - Learning",
  },
  {
    icon: <IoCodeSlashOutline size={28} />,
    role: "Back-End Developer",
    description:
      "Generation Thailand Bootcamp Junior Software Developer JSD#8 - Learning",
  },
];

function CardExperience() {
  return (
    <div className="flex flex-col md:flex md:flex-row md:flex-wrap md:gap-3 md:pt-3 xl:gap-2 xl:flex xl:flex-row xl:justify-between xl:flex-nowrap">
      {cardExperinces.map((item, index) => (
        <div
          key={index}
          className="w-full h-[280px] bg-white/20 rounded-lg p-4 text-left flex flex-col justify-between hover:border-1 border-slate-500 hover:shadow-xl shadow-black-500/40 cursor-pointer mt-5 md:w-[49%] md:mt-1
          "
        >
          <div>{item.icon}</div>
          <div>
            <p className="text-[24px] leading-7 font-role">{item.role}</p>
            <p className="mt-5 leading-5">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardExperience;
