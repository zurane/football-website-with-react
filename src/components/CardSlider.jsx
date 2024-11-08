import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ posts }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-slider max-w-7xl mx-auto my-4">
      <Slider {...settings}>
        {Array.isArray(posts) &&
          posts.map(
            (
              post,
              index // Check if posts is an array
            ) => (
              <div key={index} className="p-2">
                <div className="pb-3">
                  <img
                    src={post.image}
                    alt={post.category}
                    className="w-full object-cover rounded shadow-md"
                  />
                  <div className="mt-2">
                    <span className="text-purple-700 font-semibold text-sm">
                      <span>›</span> {post.category}
                    </span>
                    <h3 className="text-purple-950 font-bold mt-2 text-lg hover:underline cursor-pointer">
                      {post.heading}
                    </h3>
                  </div>
                </div>
              </div>
            )
          )}
      </Slider>
    </div>
  );
};

export default CardSlider;
