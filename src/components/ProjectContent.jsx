import { AiOutlineRead } from "react-icons/ai";
import { Button } from "@nextui-org/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import { projectContent } from "../Constants/ContentProject";

function ProjectContent() {
  const navigate = useNavigate();

  const location = useLocation();
  const scrollToId = location.state?.scrollToId; // รับ scrollToId จาก state
  const itemRefs = useRef({});

  useEffect(() => {
    if (scrollToId && itemRefs.current[scrollToId]) {
      itemRefs.current[scrollToId].scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToId]);

  return (
    <>
      <div className="text-left mt-[100px]">
        <div className="text-[32px] font-bold">SEE MY PROJECT</div>
        <p className="leading-3">Explore my little things</p>
      </div>
      <div className="w-full flex flex-col gap-4  md:flex md:flex-row">
        {projectContent.map((item) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[item.id] = el)}
            className="pt-[20px]"
          >
            <div className="flex flex-col justify-between bg-white h-[435px] p-4 rounded-md hover:shadow-xl shadow-black-500/40 cursor-pointer xl:h-[460px]">
              <div>
                <img
                  src={item.img}
                  alt="image project"
                  className="w-full rounded-sm"
                />
                <p className="text-black text-left mt-3 text-sm">
                  {item.paragaph}
                </p>
              </div>
              <div className="flex mt-4 items-center justify-between">
                <p className="text-black font-bold text-lg text-left items-center">
                  {item.name}
                </p>
                <Button
                  onClick={() => {
                    navigate(`detail/${item.id}`, {
                      state: { scrollToId: item.id },
                    });
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="flex text-black gap-2 text-sm items-center bg-[#00ed64] p-2 rounded-lg hover:rounded-full"
                >
                  Read
                  <AiOutlineRead size={24} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectContent;
