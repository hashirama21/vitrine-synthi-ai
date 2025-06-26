import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function BlogSection() {
  // Blog post data for mapping
  const blogPosts = [
    {
      id: 1,
      image: "/image-3.png", // Using placeholder paths for images
      categories: ["AI", "Robotics"],
      title:
        "Unlocking the potential of AI: Robotics applied to African market.",
      date: "February 17, 2025",
      readTime: "3 min read",
    },
    {
      id: 2,
      image: null, // This card has a special background with spiral sphere
      categories: ["AI", "Testimonies"],
      title: "Case studies from companies that have adopted our solutions.",
      date: "February 15, 2025",
      readTime: "4 min read",
      specialBackground: true,
    },
    {
      id: 3,
      image: "/image-2.png", // Using placeholder path
      categories: ["Tech trends"],
      title: "Interviews and analyses on AI  and innovation trends.",
      date: "February 12, 2025",
      readTime: "4 min read",
      gradientBackground: true,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-20">
      {/* Header Section */}
      <div className="relative w-[521px] h-24">
        <div className="absolute w-[517px] h-[55px] top-[41px] left-0 [background:linear-gradient(95deg,rgba(235,241,255,1)_0%,rgba(179,192,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-transparent text-[46px] text-center tracking-[-0.92px] leading-[55.2px]">
          Blog &amp; News
        </div>
        <div className="absolute top-0 left-[126px] [font-family:'Arial-Regular',Helvetica] font-normal text-color-palette-secondary text-[15px] text-center tracking-[1.50px] leading-[27.0px] whitespace-nowrap">
          MONITORING AND INNOVATION
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="flex items-start gap-[34px]">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="w-[364px] h-[542px] rounded-[18px] border-line-gray"
          >
            <CardContent className="p-6">
              <div className="relative w-[316px] h-[491px]">
                {/* Card Image/Background */}
                {post.specialBackground ? (
                  <div className="w-[314px] h-[216px] rounded-[14px] overflow-hidden [background:linear-gradient(180deg,rgba(107,107,165,1)_0%,rgba(156,222,233,1)_100%)]">
                    <div className="relative w-[386px] h-[659px] top-[-217px] -left-11 rotate-[75.00deg]">
                      <div className="relative h-[659px]">
                        <div className="absolute w-[91px] h-[262px] top-[389px] left-[39px] rounded-[45.4px/130.95px] rotate-[18.63deg] blur-sm [background:radial-gradient(50%_50%_at_-41%_37%,rgba(245,186,255,1)_0%,rgba(245,186,255,0)_100%),radial-gradient(50%_50%_at_76%_60%,rgba(255,255,251,1)_0%,rgba(239,177,255,0)_100%),radial-gradient(50%_50%_at_12%_57%,rgba(57,207,255,1)_0%,rgba(57,207,255,0)_100%),radial-gradient(50%_50%_at_37%_61%,rgba(57,231,255,1)_0%,rgba(57,231,255,0)_100%),radial-gradient(50%_50%_at_93%_56%,rgba(57,160,255,1)_0%,rgba(57,160,255,0)_100%),radial-gradient(50%_50%_at_90%_48%,rgba(31,253,213,1)_0%,rgba(31,253,213,0)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
                        <div className="absolute w-[91px] h-[262px] top-2 left-64 rounded-[45.4px/130.95px] rotate-[18.63deg] blur-sm [background:radial-gradient(50%_50%_at_-41%_37%,rgba(245,186,255,1)_0%,rgba(245,186,255,0)_100%),radial-gradient(50%_50%_at_76%_60%,rgba(255,255,251,1)_0%,rgba(239,177,255,0)_100%),radial-gradient(50%_50%_at_12%_57%,rgba(57,207,255,1)_0%,rgba(57,207,255,0)_100%),radial-gradient(50%_50%_at_37%_61%,rgba(57,231,255,1)_0%,rgba(57,231,255,0)_100%),radial-gradient(50%_50%_at_93%_56%,rgba(57,160,255,1)_0%,rgba(57,160,255,0)_100%),radial-gradient(50%_50%_at_90%_48%,rgba(31,253,213,1)_0%,rgba(31,253,213,0)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
                        <div className="absolute w-[126px] h-[126px] top-[225px] left-[115px] rounded-[62.85px] blur-sm [background:radial-gradient(50%_50%_at_-41%_37%,rgba(245,186,255,1)_0%,rgba(245,186,255,0)_100%),radial-gradient(50%_50%_at_76%_60%,rgba(255,255,251,1)_0%,rgba(239,177,255,0)_100%),radial-gradient(50%_50%_at_12%_57%,rgba(57,207,255,1)_0%,rgba(57,207,255,0)_100%),radial-gradient(50%_50%_at_37%_61%,rgba(57,231,255,1)_0%,rgba(57,231,255,0)_100%),radial-gradient(50%_50%_at_93%_56%,rgba(57,160,255,1)_0%,rgba(57,160,255,0)_100%),radial-gradient(50%_50%_at_90%_48%,rgba(31,253,213,1)_0%,rgba(31,253,213,0)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
                        <div className="absolute w-[140px] h-[140px] top-[257px] left-[123px]">
                          <div className="relative w-[210px] h-[210px] top-[-35px] left-[-35px]">
                            <Image
                              className="absolute w-[172px] h-[172px] top-[19px] left-[19px] rotate-[-75.00deg]"
                              alt="Spiral sphere"
                              src="/path/to/image1.png" // Remplace par le bon chemin
                              width={172}
                              height={172}
                            />
                            <Image
                              className="absolute w-[172px] h-[172px] top-[19px] left-[19px] rotate-[-75.00deg]"
                              alt="Spiral sphere"
                              src="/path/to/image2.png" // Remplace par le bon chemin
                              width={172}
                              height={172}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : post.gradientBackground ? (
                  <div className="w-[314px] h-[216px] rounded-[14px] overflow-hidden [background:radial-gradient(50%_50%_at_76%_51%,rgba(0,255,200,1)_0%,rgba(0,80,163,1)_100%)]">
                    <Image
                      className="w-[188px] h-[215px] mt-px ml-[69px]"
                      alt="Blog image"
                      src={post.image}
                      width={188}
                      height={215}
                    />
                  </div>
                ) : (
                  <Image
                    className="w-[314px] h-[216px] rounded-[14px]"
                    alt="Blog image"
                    src={post.image ?? "/fallback-image.jpg"}
                    width={314}
                    height={216}
                  />
                )}

                {/* Categories */}
                <div className="flex items-start gap-2.5 mt-[30px]">
                  {post.categories.map((category, index) => (
                    <Badge
                      key={index}
                      className="px-3 py-0.5 bg-black rounded-[50px]"
                    >
                      <span className="[font-family:'Manrope-Regular',Helvetica] font-normal text-gray text-[13px] tracking-[1.30px] leading-[23.4px]">
                        {category}
                      </span>
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <div className="w-[314px] mt-[15px] [background:linear-gradient(95deg,rgba(235,241,255,1)_0%,rgba(179,192,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope-Medium',Helvetica] font-medium text-transparent text-[28px] tracking-[-0.56px] leading-[38.1px]">
                  {post.title}
                </div>

                {/* Separator */}
                <Separator className="w-[314px] h-px mt-[132px] bg-line-gray" />

                {/* Date and Read Time */}
                <div className="flex items-center gap-3 mt-[26px]">
                  <div className="[font-family:'Manrope-Regular',Helvetica] font-normal text-gray text-sm tracking-[0] leading-[25.2px]">
                    {post.date}
                  </div>
                  <div className="w-[3px] h-[3px] bg-gray rounded-[1.5px]" />
                  <div className="[font-family:'Manrope-Regular',Helvetica] font-normal text-gray text-sm tracking-[0] leading-[25.2px]">
                    {post.readTime}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Read More Button */}
      <Button
        variant="outline"
        className="min-w-[200px] h-[50px] rounded-full border-line-gray text-gray [font-family:'Manrope-Medium',Helvetica]"
      >
        Read More
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
