import React from "react";
import Slider from "react-slick";

const BannerCarousel = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="relative w-full h-96">
      <div className="absolute inset-0 bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto">
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="flex justify-center p-4 ">
                <div className="bg-transparent p-4 rounded shadow-md flex justify-around ">
                  <div className="w-2/3">
                    <div>
                      <p className="text-2xl max-lg:text-lg font-bold mb-4 py-2 px-4 rounded-md text-white w-1/2">
                        {video.category}
                      </p>
                    </div>

                    <div className="pr-4 2xl:w-2/3">
                      <h2 className="text-2xl max-lg:text-lg font-bold mb-4 py-2 px-4 rounded-md text-white">
                        {video.title}
                      </h2>
                      <p className="mt-2 text-white max-lg:text-xs">{video.description}</p>
                    </div>
                  </div>

                  <div className="w-1/3 content-center">
                    <div className="rounded">
                      <img
                        src={video.image}
                        alt={video.category}
                        className="w-96"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
