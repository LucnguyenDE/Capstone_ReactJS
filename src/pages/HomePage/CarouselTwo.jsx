import React from "react";
import { Carousel } from "antd";
import ItemMovie from "../../components/ItemMovie";
import { nanoid } from "nanoid";

export default function CarouselTwo({ listMovieCarouselTwo }) {
  console.log("carousel_two render");
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  let renderMovieList = () => {
    return listMovieCarouselTwo.map((arrayMovie) => {
      return (
        <div key={nanoid()}>
          <div className="container flex justify-center p-10">
            <div className="w-2/3 grid grid-cols-4 gap-8">
              {arrayMovie.map((item) => {
                return <ItemMovie dataMovie={item} key={nanoid()} />;
              })}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div id="carousel_two">
      <Carousel afterChange={onChange}>{renderMovieList()}</Carousel>
    </div>
  );
}
