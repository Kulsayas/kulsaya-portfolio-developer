import SlideItem from "./SlideItem";
import { useTheme } from "../context/ThemeContext";

function PhotoHeader() {
  const { theme } = useTheme();

  const Images = [
    "/assets/Images/bluklake.jpg",
    "/assets/Images/sunflower.jpg",
    "/assets/Images/boatfilm.jpg",
    "/assets/Images/lampangmook.jpg",
    "/assets/Images/newyear1.jpg",
    "/assets/Images/lampangroad.jpg",
    "/assets/Images/newyear2.jpg",
    "/assets/Images/lakefilm.jpg",
    "/assets/Images/newyear5.jpg",
    "/assets/Images/ohmgrad.jpg",
    "/assets/Images/sunsetfilm.jpg",
    "/assets/Images/inbangmod.jpg",
    "/assets/Images/chang.jpg",
    "/assets/Images/watprakeaw.jpg",
    "/assets/Images/wpnagm.jpg",
  ];
  return (
    <div className="mt-[250px] leading-[36px]">
      <div className="flex items-center gap-2 justify-center">
        <p
          className={`text-[22px] font-topic-hobbie md:text-[40px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          I Love
        </p>
        <img
          src="/assets/Images/newyear1.jpg"
          alt="Image Film"
          className="rounded-md"
          width={50}
        />
        <p
          className={`text-[22px] font-topic-hobbie md:text-[40px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Photography,
        </p>
      </div>
      <p
        className={`text-[22px] font-topic-hobbie md:text-[40px] ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        Here Are Some Photos
      </p>
      <div className="flex items-center gap-2  justify-center">
        <p
          className={`text-[22px] font-topic-hobbie md:text-[40px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          I
        </p>
        <img
          src="/assets/Images/inbangmod.jpg
          "
          alt="Image Film"
          className="rounded-md"
          width={50}
        />
        <p
          className={`text-[22px] font-topic-hobbie md:text-[40px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Captured...
        </p>
      </div>
      <SlideItem slides={Images} />
    </div>
  );
}

export default PhotoHeader;
