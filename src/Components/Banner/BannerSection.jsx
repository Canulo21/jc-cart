import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ChevronsRight } from "lucide-react";
import "../Banner/SplideSLider.css";

// banner images
import banner1 from "../Banner/images/banner1.jpeg";
import banner2 from "../Banner/images/banner2.jpeg";

function BannerSection() {
  const imgSlider = [
    {
      bannerImg: banner1,
      bannerTitle: (
        <span>
          Exclusive Deals <br /> for Couples
        </span>
      ),
      bannerText: "– Fashion, Gifts & More! 💖",
      bannerBtn: "#",
    },
    {
      bannerImg: banner2,
      bannerTitle: (
        <span>
          Upgrade Your <br />
          Tech Today!
        </span>
      ),
      bannerText: "Latest Gadgets, Best Deals, Unbeatable Prices. 📱",
      bannerBtn: "#",
    },
  ];

  const splideOptions = {
    type: "loop",
    autoplay: true,
    arrows: false,
    interval: 8000,
    speed: 2500,
    easing: "ease-in-out",
    perPage: 1,
    perMove: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div className="mt-[168px]">
      <Splide options={splideOptions} className="sliderDiv">
        {imgSlider.map((image, i) => (
          <SplideSlide key={i}>
            <div className="img-banner relative shadow-2xl">
              <img src={image.bannerImg} alt={image.bannerTitle} />
            </div>
            <div className="banner-wrap">
              <p className="title text-[55px] font-bold leading-none">
                {image.bannerTitle}
              </p>
              <p className="text text-base mt-5">{image.bannerText}</p>
              <div className="bnr-btn mt-10">
                <a
                  href={image.bannerBtn}
                  className="capitalize text-xl bg-[#2d3748] hover:bg-[#2d3748c2]   py-4 px-10 shadow-lg flex flex-row gap-3 justify-center w-fit items-center"
                >
                  Shop now <ChevronsRight />
                </a>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default BannerSection;
