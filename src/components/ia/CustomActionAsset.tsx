"use client";

import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";

export default function CustomAssetsSection() {
  // Mission statements data for mapping
  const missions = [
    "Develop advanced AI solutions tailored to economic and social challenges.",
    "Train the talents of tomorrow and strengthen the african technological ecosystem.",
    "Facilitate the adoption of AI in businesses, institutions, and strategic industries.",
    "Ensure responsible and ethical AI for sustainable inclusive development.",
  ];

  return (
    <section className="py-6">
      <div className="flex flex-wrap items-center justify-center gap-[100px] px-[60px]">
        {/* Interactive Design Preview Card */}
        <Card className="relative w-[545px] h-[423px] rounded-[14px] backdrop-blur-[5px] border border-solid border-line-gray overflow-hidden">
          <div className="relative w-full h-full">
            {/* Background lines image */}
            <Image
              className="absolute w-full h-full object-cover"
              alt="Lines"
              src=""
              width={10}
              height={10} 
            />

            {/* Gradient overlay */}
            <div className="absolute w-full h-full rounded-[13px] [background:linear-gradient(to_bottom_right,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_top_right_/_50%_50%_no-repeat]" />

            {/* Emre cursor */}
            <div className="absolute top-[51px] left-20">
              <div className="relative">
                <div className="inline-flex items-center justify-center px-4 py-0.5 bg-[#3549ff] rounded-[50px]">
                  <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#ffffff] text-lg">
                    Emre
                  </div>
                </div>
                <div className="absolute w-[33px] h-[33px] top-6 left-[65px]">
                  <Image src="" alt="Cursor" />
                </div>
              </div>
            </div>

            {/* Chris cursor */}
            <div className="absolute top-[140px] right-[82px]">
              <div className="relative">
                <div className="absolute w-6 h-6">
                  <Image src="" alt="Component Node" />
                </div>
                <div className="inline-flex items-center justify-center px-4 py-0.5 mt-[23px] ml-3 bg-[#ff603d] rounded-[50px]">
                  <div className="text-[#ffffff] text-lg [font-family:'Arial-Regular',Helvetica] font-normal">
                    Chris
                  </div>
                </div>
              </div>
            </div>

            {/* Central image */}
            <div className="absolute top-[39px] left-[231px] w-[172px] h-[202px]">
              <div className="relative w-[244px] h-[244px] -top-1.5 -left-9 bg-[url(/blur.png)] bg-cover bg-[50%_50%]">
                <Image
                  className="absolute w-[172px] h-[172px] top-1.5 left-9 object-cover"
                  alt="Image"
                  src=""
                />
              </div>
            </div>

            {/* "Flex the" box */}
            <Card className="absolute w-[255px] h-[131px] bottom-10 left-0 rounded-[14px] backdrop-blur-[5px] border border-solid border-line-gray">
              <div className="relative w-[183px] h-[83px] top-6 left-9">
                <div className="absolute top-px left-[9px] [font-family:'Manrope-Medium',Helvetica] font-medium text-white text-[44px] tracking-[0.44px] leading-[79.2px]">
                  Flex the
                </div>

                <div className="absolute w-[183px] h-[83px] top-0 left-0">
                  <div className="relative h-[83px]">
                    <div className="w-[179px] h-[79px] top-0.5 left-0.5 absolute border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="w-[5px] h-[5px] top-0 left-0 bg-[#ffffff] absolute border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="w-[5px] h-[5px] top-0 left-[178px] bg-[#ffffff] absolute border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="w-[5px] h-[5px] top-[78px] left-0 bg-[#ffffff] absolute border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="w-[5px] h-[5px] top-[78px] left-[178px] bg-[#ffffff] absolute border-[0.6px] border-solid border-[#b133ff]" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Color sliders box */}
            <Card className="absolute w-[333px] h-[131px] bottom-10 right-[40px] rounded-[14px] backdrop-blur-[5px] border border-solid border-line-gray">
              {/* Color picker slider */}
              <div className="absolute w-60 h-[22px] top-[29px] left-[45px]">
                <div className="relative h-[22px]">
                  <div className="absolute w-60 h-3 top-[5px] left-0 rounded-[50px] [background:linear-gradient(90deg,rgba(216,7,22,1)_0%,rgba(249,100,33,1)_9%,rgba(248,223,69,1)_17%,rgba(139,255,77,1)_28%,rgba(72,255,83,1)_34%,rgba(69,254,144,1)_44%,rgba(57,240,253,1)_52%,rgba(35,139,223,1)_62%,rgba(1,111,247,1)_70%,rgba(24,16,244,1)_77%,rgba(171,0,245,1)_85%,rgba(242,1,151,1)_91%,rgba(239,3,26,1)_100%)]" />
                  <div className="absolute w-[22px] h-[22px] top-0 left-[175px] bg-[#1c11f5] rounded-[11px] border-[6px] border-solid border-[#ffffff]" />
                </div>
              </div>

              {/* Opacity slider */}
              <div className="absolute w-60 h-[22px] top-[78px] left-[45px]">
                <div className="relative h-[22px]">
                  <Image
                    className="absolute w-60 h-3 top-[5px] left-0"
                    alt="Color opacity"
                    src=""
                  />
                  <div className="absolute w-60 h-3 top-[5px] left-0 rounded-[50px] [background:linear-gradient(90deg,rgba(28,17,245,0)_0%,rgba(28,17,245,1)_100%)]" />
                  <div className="absolute w-[22px] h-[22px] top-0 left-[218px] bg-[#ffffff] rounded-[11px] border-[6px] border-solid" />
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Missions Content */}
        <div className="flex flex-col items-start gap-10 max-w-[514px]">
          <div className="flex flex-col items-start gap-[22px]">
            {/* Heading */}
            <div className="relative w-full">
              <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-color-palette-secondary text-[15px] tracking-[1.50px] leading-[27.0px]">
                SYNTHI AI COMMITMENTS
              </div>
              <div className="[background:linear-gradient(95deg,rgba(235,241,255,1)_0%,rgba(179,192,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Arial_Rounded_MT_Bold-Regular',Helvetica] font-normal text-transparent text-[46px] leading-[55.2px]">
                Our Missions
              </div>
            </div>

            {/* Mission points */}
            <div className="flex flex-col w-full gap-[18px]">
              {missions.map((mission, index) => (
                <div key={index} className="flex items-center gap-3.5 w-full">
                  <div className="flex items-center justify-center w-[34px] h-[34px] bg-[#121523] rounded-[17px]">
                    <Check className="w-[11px] h-[9px] text-white" />
                  </div>
                  <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-light-gray text-[15px] leading-[27.0px]">
                    {mission}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
