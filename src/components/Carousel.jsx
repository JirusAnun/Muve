import { Carousel } from "@material-tailwind/react";

function CarouselAuto({ img }) {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      className="rounded-xl w-[90vw] h-[25vh] mt-5"
      autoplayDelay={10000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {img.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image ${index}`}
          className="object-fit"
        />
      ))}
    </Carousel>
  );
}

export default CarouselAuto;
