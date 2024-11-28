import SlideItem from "./SlideItem";
import { useTheme } from "../context/ThemeContext";

function PhotoHeader() {
  const { theme } = useTheme();

  const Images = [
    "public/assets/Images/000049.JPG",
    "public/assets/Images/000060.JPG",
    "public/assets/Images/000061.JPG",
    "public/assets/Images/000021.JPG",
    "public/assets/Images/4B04343B-E723-4A6C-BFCA-18F326CDBD96.jpg",
    "public/assets/Images/000016 (1).JPG",
    "public/assets/Images/4D0D60EB-BF2B-466B-AFC6-E2D2F31E942B.jpg",
    "public/assets/Images/000046.JPG",
    "public/assets/Images/000062.JPG",
    "public/assets/Images/000004.JPG",
    "public/assets/Images/000054.JPG",
    "public/assets/Images/C483722A-7B31-4BA6-8798-8AAB98AD00E3.jpg",
    "public/assets/Images/000074.JPG",
    "public/assets/Images/20220213_091000_000027.jpg",
    "public/assets/Images/IMG_1262.JPEG",
    "public/assets/Images/20201114_144100_000061.jpg",
    "public/assets/Images/20211214_141800_000033.jpg",
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
          src="public/assets/Images/4B04343B-E723-4A6C-BFCA-18F326CDBD96.jpg"
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
          src="public/assets/Images/IMG_1262.JPEG"
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
