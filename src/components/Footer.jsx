import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";

function Footer() {
  return (
    <div>
      <div className="flex flex-col mt-[300px] mb-[100px] md:flex-row">
        <div className="w-full leading-9 text-center text-[32px] text-white/60 font-bold md:text-[40px] md:leading-10 md:text-left xl:text-[52px] xl:leading-[60px]">
          <p>LET’S WORK</p>
          <p>TOGETHER</p>
        </div>
        <div className="w-full flex flex-col gap-1 items-center md:items-end xl:pr-6">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <AiOutlineMail className="size-5 xl:size-7" />:
              <span className="xl:text-[20px]">Kulsaya.see@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 py-1">
              <TbPhoneCall className="size-5 xl:size-7" />:
              <span className="xl:text-[20px]">(+66)89-623-2139</span>
            </div>
          </div>
          <div className=" py-3">
            <button
              onClick={() => {
                window.location.href = "mailto:Kulsaya.see@gmail.com";
              }}
              className="flex text-black gap-2 bg-[#00ed64] p-2 rounded-lg hover:rounded-full text-[14px]"
            >
              Talk with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
