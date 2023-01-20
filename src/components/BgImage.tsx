import bgImageMobileLight from "../assets/images/bg-mobile-light.jpg";
import bgImageMobileDark from "../assets/images/bg-mobile-dark.jpg";
import bgImageDesktopLight from "../assets/images/bg-desktop-light.jpg";
import bgImageDesktopDark from "../assets/images/bg-desktop-dark.jpg";

const BgImage = () => {
  return (
    <div className="overflow-hidden w-full h-[230px]">
      <img
        src={bgImageDesktopDark}
        alt="bg-image"
        className="w-full h-full object-fill hidden dark:md:block"
      />
      <img
        src={bgImageMobileDark}
        alt="bg-image"
        className="w-full h-full object-fill dark:block hidden dark:md:hidden"
      />
      <img
        src={bgImageDesktopLight}
        alt="bg-image"
        className="w-full h-full object-fill hidden dark:hidden md:block"
      />
      <img
        src={bgImageMobileLight}
        alt="bg-image"
        className="w-full h-full object-fill block dark:hidden md:hidden"
      />
    </div>
  );
};

export default BgImage;
