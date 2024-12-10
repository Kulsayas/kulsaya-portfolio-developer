import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectContent } from "../Constants/ContentProject";
import { IoChevronBackOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

function DetailOnlineGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const content = useMemo(() => {
    return projectContent.find((item) => item.id === parseInt(id));
  }, [id]);

  const backHomepage = () => {
    navigate("/", { state: { scrollToId: id } });
  };

  return (
    <div className="mt-[50px] xl:px-[40px]">
      <div
        className={`text-left hover:text-[#00ed64] ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <button onClick={backHomepage}>
          <IoChevronBackOutline size={24} />
        </button>
      </div>

      {
        <div className="text-left py-10">
          <div
            className={`font-bold text-[20px] xl:text-[32px]
              ${theme === "light" ? "text-black" : "text-white"}`}
          >
            {content.name}
          </div>
          <p
            className={`text-[14px] xl:text-[16px] 
              ${theme === "light" ? "text-black" : "text-white"}`}
          >
            {content.paragaph}
          </p>
          <div className="flex justify-center py-5">
            <img
              src={content.img}
              alt="image detail project"
              className="py-5 w-full xl:w-[70%]"
            />
          </div>
          <div>
            <p
              className={`font-bold text-[20px] pt-5 xl:text-[32px]  
                ${theme === "light" ? "text-black" : "text-white"}`}
            >
              Programming Languages & Frameworks
            </p>
            <p
              className={`text-[14px] xl:text-[16px] 
                ${theme === "light" ? "text-black" : "text-white"}`}
            >
              {content.stack}
            </p>
          </div>

          <p
            className={`font-bold text-[20px] pt-5 xl:text-[32px]  
                ${theme === "light" ? "text-black" : "text-white"}`}
          >
            Overview
          </p>
          <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
            {content.content}
          </p>
          <p
            className={`py-5 xl:text-[16px] 
              ${theme === "light" ? "text-black" : "text-white"}`}
          >
            {content.subContent}
          </p>
          <button className="flex px-3 py-3 bg-[#00ed64] text-black rounded-md gap-1 items-center text-[14px] h-9 hover:rounded-full">
            <a href={content.github} target="_blank">
              View on GitHub
            </a>
          </button>
        </div>
      }
    </div>
  );
}

export default DetailOnlineGame;
