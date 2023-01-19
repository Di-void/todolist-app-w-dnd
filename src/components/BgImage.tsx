import bgImageMobileLight from "../assets/images/bg-mobile-light.jpg";
import bgImageMobileDark from "../assets/images/bg-mobile-dark.jpg";
import bgImageDesktopLight from "../assets/images/bg-desktop-light.jpg";
import bgImageDesktopDark from "../assets/images/bg-desktop-light.jpg";

const BgImage = () => {
  return (
    <div className="overflow-hidden w-full h-[230px]">
      <img
        src={bgImageMobileLight}
        alt="bg-image"
        className="w-full h-full object-fill"
      />
    </div>
  );
};

export default BgImage;
