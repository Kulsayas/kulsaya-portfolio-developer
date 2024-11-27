import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectContent } from "../Constants/ContentProject";
import { IoChevronBackOutline } from "react-icons/io5";

function DetailOnlineGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  const content = useMemo(() => {
    return projectContent.find((item) => item.id === parseInt(id));
  }, [id]);

  const backHomepage = () => {
    navigate("/", { state: { scrollToId: id } });
  };

  return (
    <div className="mt-[50px] xl:px-[40px]">
      <div className="text-left hover:text-[#00ed64]">
        <button onClick={backHomepage}>
          <IoChevronBackOutline size={24} />
        </button>
      </div>

      {
        <div className="text-left py-10">
          <div className="font-bold text-[20px] xl:text-[32px]">
            {content.name}
          </div>
          <p className="text-[14px] xl:text-[16px]">{content.paragaph}</p>
          <div className="flex justify-center py-5">
            <img
              src={content.img}
              alt="image detail project"
              className="py-5 w-full xl:w-[70%]"
            />
          </div>
          <div>
            <p className="font-bold text-[20px] pt-5 xl:text-[32px]">
              Programming Languages & Frameworks
            </p>
            <p className="text-[14px] xl:text-[16px]">{content.stack}</p>
          </div>

          <p className="font-bold text-[20px] pt-5 xl:text-[32px]">Overview</p>
          <p>{content.content}</p>
          <p className="py-5 text-[14px] xl:text-[16px]">
            {content.subContent}
          </p>
        </div>
      }
    </div>
  );
}

export default DetailOnlineGame;
