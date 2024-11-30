import ContactLink from "./ContactLink";
import { useTheme } from "../context/ThemeContext";

export default function Profile() {
  const { theme } = useTheme();
  return (
    <div className="">
      <div className="h-[200px] relative xl:h-[300px]">
        <img
          className="rounded-lg w-[120px] absolute top-10 right-12 md:top-10 md:right-60 xl:w-[200px] xl:left-[50%]"
          src="/assets/Images/amgrad.jpg"
          alt="image profile"
        />
      </div>
      <div>
        <div className="flex flex-col items-start leading-8 md:flex md:flex-col md:items-center">
          <div>
            <p
              className={`font-bitter text-[30px] font-semibold text-left md:text-[52px] md:pb-5 xl:text-[72px] xl:pb-10 
                ${theme === "light" ? "text-green-950" : "text-white"}`}
            >
              Hello !
            </p>

            <p
              className={`font-bitter text-[30px] font-semibold text-left md:text-[52px] md:pb-2 xl:text-[72px] xl:pb-7 
                ${theme === "light" ? "text-green-950" : "text-white"}`}
            >
              I’m Kulsaya Seenual
            </p>
            <p
              className={`text-[14px] text-left xl:text-[20px] 
                ${theme === "light" ? "text-green-950" : "text-white"}`}
            >
              Passionate as a Junior Software Developer.
            </p>
            <div className="pt-2">
              <ContactLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
