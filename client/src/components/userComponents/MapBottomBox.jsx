import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import image1 from "../../assets/public/chargingStation01.jpeg";
import image2 from "../../assets/public/fuilStation01.jpg";
import image3 from "../../assets/public/chargingStation02.jpeg";
import image4 from "../../assets/public/fuilStation02.jpeg";
import image5 from "../../assets/public/chargingStation03.jpeg";

const mapBoxSlider = [
  {
    _id: 1,
    image: image1,
    name: "Banani Charging Station",
    slot: "2 slot available",
    type: "charge",
  },
  {
    _id: 2,
    image: image2,
    name: "Mohakhali Fuil Station",
    slot: "1 slot available",
    type: "fuil",
  },
  {
    _id: 3,
    image: image3,
    name: "Mirpur Charging Station",
    slot: "5 slot available",
    type: "charge",
  },
  {
    _id: 4,
    image: image4,
    name: "Fakiraful Fuil Station",
    slot: "3 slot available",
    type: "fuli",
  },
  {
    _id: 5,
    image: image5,
    name: "Uttora Charging Station",
    slot: "2 slot available",
    type: "charge",
  },
];




const MapBottomBox = () => {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10  p-2  flex items-center w-[90%] sm:w-[90%] justify-center max-h-[150px]">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1, // Number of slides to scroll at a time
          containScroll: "trim", // Prevent scrolling beyond the last item
        }}
        className="w-[90%] sm:max-w-md  md:max-w-2xl max-h-[150px] "
      >
        <CarouselContent>
          {mapBoxSlider.map((item, index) => (
            <CarouselItem
              key={item?._id}
              className="md:basis-1/2  "
            >
              <Card className="border-blue-300">
                <div className=" rounded-lg  bg-blue-300 flex ">
                  <div>
                    <img
                      src={item?.image}
                      alt="image"
                      className="w-28 h-full rounded-lg"
                    />
                  </div>
                  <div className="p-1">
                    <p
                      className={`font-bold ${
                        item?.type === "charge"
                          ? "text-blue-800"
                          : "text-red-800"
                      }`}
                    >
                      {item?.name}
                    </p>
                    <p className="font-semibold text-cyan-900">{item?.slot}</p>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MapBottomBox;
