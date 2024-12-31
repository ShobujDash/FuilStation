import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

const MapBottomBox = () => {
  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10  p-2 rounded-md shadow-md flex items-center w-[95%] justify-center max-h-[150px]">
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1, // Number of slides to scroll at a time
          containScroll: "trim", // Prevent scrolling beyond the last item
        }}
        className="w-[90%] sm:max-w-md  md:max-w-2xl max-h-[150px] "
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3  ">
              <Card>
                <div key={index} className="p-4 rounded-lg  bg-white">
                  <p>ID</p>
                  <p>item</p>
                  <p>25 Apr</p>
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
