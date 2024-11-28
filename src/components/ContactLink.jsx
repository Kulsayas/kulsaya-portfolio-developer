import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { useTheme } from "../context/ThemeContext";

function ContactLink() {
  const { theme } = useTheme();

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/KulsayaResume.pdf";
    link.download = "KulsayaResume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex gap-2">
        <button>
          <a
            href="https://www.linkedin.com/in/kulsaya-seenual/"
            target="_blank"
          >
            <FaLinkedin
              className={`size-[24px] hover:text-green-950
              ${theme === "light" ? "text-black" : "text-white"}`}
            />
          </a>
        </button>
        <button>
          <a href="https://github.com/Kulsayas" target="_blank">
            <FaGithub
              className={`size-[24px] hover:text-green-950
              ${theme === "light" ? "text-black" : "text-white"}`}
            />
          </a>
        </button>
        <button
          onClick={() => {
            window.location.href = "mailto:Kulsaya.see@gmail.com";
          }}
        >
          <MdOutlineMarkEmailUnread
            className={`size-[24px] hover:text-green-950
              ${theme === "light" ? "text-black" : "text-white"}`}
          />
        </button>
        <button
          onClick={() => downloadResume()}
          className="flex px-2 py-2 bg-[#00ed64] text-black rounded-md gap-1 items-center text-[14px] h-9 hover:rounded-full"
        >
          <LuDownload className="size=24" /> Resume
        </button>
      </div>
    </div>
  );
}

export default ContactLink;
