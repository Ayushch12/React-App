import { Carousel } from "flowbite-react";

function Flowcard() {
  return (
    <div className="bg-gray-200 p-4">
      <Carousel className="w-full max-w-screen-xl mx-auto">
        <img
          className="w-full h-auto"
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          className="w-full h-auto"
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          className="w-full h-auto"
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          className="w-full h-auto"
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
        <img
          className="w-full h-auto"
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </Carousel>
    </div>
  );
}

export default Flowcard;
