import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

// Team member data for mapping
const teamMembers = [
  {
    id: 1,
    name: "Vincess Dongmo",
    role: "Founder",
    image: "", // Placeholder for image
  },
  {
    id: 2,
    name: "Fokam Minyim",
    role: "Full-Stack Developer",
    image: "", // Placeholder for image
  },
  {
    id: 3,
    name: "John Doe",
    role: "Frontend Developer",
    image: "", // Placeholder for image
  },
  {
    id: 4,
    name: "John Doe",
    role: "Frontend Developer",
    image: "", // Placeholder for image
  },
];

export default function FeaturesDisplaySection()  {
  return (
    <section className="flex flex-col items-center gap-20 w-full py-10">
      {/* Header section */}
      <div className="flex flex-col items-center gap-3.5 max-w-2xl">
        <span className="font-normal text-[15px] text-center tracking-[1.50px] leading-[27px] text-color-palette-secondary uppercase">
          OUR AWESOME TEAM
        </span>

        <h2 className="[background:linear-gradient(95deg,rgba(235,241,255,1)_0%,rgba(179,192,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-normal text-[46px] text-center tracking-[-0.92px] leading-[55.2px] max-w-[586px]">
          We Are Born For Technology
        </h2>

        <p className="font-normal text-gray text-base text-center leading-[28.8px] max-w-[592px]">
          We make life easier customers and community through reliable,
          affordable, powerful, and useful tech innovations.
        </p>
      </div>

      {/* Team members carousel */}
      <div className="relative w-full max-w-[1160px]">
        <Carousel className="w-full">
          <CarouselContent>
            {teamMembers.map((member) => (
              <CarouselItem key={member.id} className="md:basis-1/3">
                <Card className="h-[450px] flex flex-col justify-end rounded-3xl border-none [background:linear-gradient(180deg,rgba(11,14,35,0)_0%,rgba(11,14,35,1)_100%)]">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-start gap-2.5">
                      <h3 className="font-normal text-light-gray text-2xl tracking-[-0.48px] leading-[43.2px]">
                        {member.name}
                      </h3>
                      <p className="font-normal text-gray text-base leading-[28.8px] w-full max-w-[320px]">
                        {member.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-[-84px] top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full border border-solid border-line-gray backdrop-blur backdrop-brightness-[100%] [background:linear-gradient(175deg,rgba(22,30,50,1)_0%,rgba(4,7,13,1)_100%)]">
            <ChevronLeft className="w-6 h-6" />
          </CarouselPrevious>

          <CarouselNext className="absolute right-[-84px] top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full border border-solid border-line-gray backdrop-blur backdrop-brightness-[100%] [background:linear-gradient(175deg,rgba(22,30,50,1)_0%,rgba(4,7,13,1)_100%)]">
            <ChevronRight className="w-6 h-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
