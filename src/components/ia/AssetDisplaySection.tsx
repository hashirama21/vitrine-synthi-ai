import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";

export default function AssetsDisplaySection() {
  // Data for the bullet points
  const bulletPoints = [
    "The AI leader in Africa: Unique expertise in AI applied to the continent's needs.",
    "An ethical and responsible approach: Secure and accessible AI solutions.",
    "A strong network of partners: Collaboration with businesses, startups, universities, and institutions.",
    "Concrete impact: Transformation of key sectors and improvement of people's lives.",
    "Cutting-edge technology: Integration of the latest advances in AI, NLP, and computer vision.",
  ];

  return (
    <section className="py-6">
      <div className="flex flex-wrap items-center justify-center gap-[100px] px-[60px]">
        {/* Left content - Why choose us */}
        <div className="flex flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-[22px]">
            <div className="relative h-24 w-[514px]">
              <div className="absolute top-0 left-0 font-['Arial-Regular'] text-[15px] tracking-[1.50px] leading-[27.0px] text-color-palette-secondary">
                COMMITMENT TO EXCELLENCE
              </div>
              <div className="absolute top-[41px] left-0 w-[510px] font-['Arial_Rounded_MT_Bold-Regular'] text-[46px] leading-[55.2px] [background:linear-gradient(95deg,rgba(235,241,255,1)_0%,rgba(179,192,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
                Why choose us
              </div>
            </div>

            <div className="flex flex-col w-[480px] gap-[18px]">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3.5 w-full">
                  <div className="relative w-[34px] h-[34px] bg-[#121523] rounded-[17px] flex items-center justify-center">
                    <Check className="w-[11px] h-[9px] text-white" />
                  </div>
                  <div className="font-['Arial-Regular'] text-[15px] leading-[27.0px] text-light-gray">
                    {point}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right content - Interactive design element */}
        <Card className="relative w-[545px] h-[423px] rounded-[14px] backdrop-blur-[5px] border-line-gray overflow-visible">
          <div className="relative w-[628px] h-[421px] top-px left-[-45px]">
            <img
              className="absolute w-[543px] h-[421px] top-0 left-[46px]"
              alt="Lines"
              src=""
            />

            <div className="absolute w-[544px] h-[421px] top-0 left-[45px] rounded-[13px] [background:linear-gradient(to_bottom_right,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_bottom_right_/_50%_50%_no-repeat,linear-gradient(to_bottom_left,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_bottom_left_/_50%_50%_no-repeat,linear-gradient(to_top_left,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_top_left_/_50%_50%_no-repeat,linear-gradient(to_top_right,rgba(11,15,32,0)_0%,rgba(14,16,29,0.49)_50%)_top_right_/_50%_50%_no-repeat]" />

            {/* Emre cursor */}
            <div className="absolute w-[98px] h-[57px] top-[51px] left-20">
              <div className="relative h-[57px]">
                <div className="absolute top-6 left-[65px] w-[33px] h-[33px]">
                  {/* Cursor placeholder */}
                  <img src="" alt="Cursor" className="w-full h-full" />
                </div>
                <Badge className="absolute top-0 left-0 px-4 py-0.5 bg-[#3549ff] rounded-[50px] font-['Arial-Regular'] text-lg text-white">
                  Emre
                </Badge>
              </div>
            </div>

            {/* Chris cursor */}
            <div className="absolute w-[88px] h-14 top-[140px] left-[463px]">
              <div className="relative h-14">
                <div className="absolute w-6 h-6 top-0 left-0">
                  {/* Component node placeholder */}
                  <img src="" alt="Component node" className="w-full h-full" />
                </div>
                <Badge className="absolute top-[23px] left-3 px-4 py-0.5 bg-[#ff603d] rounded-[50px] font-['Arial-Regular'] text-lg text-white">
                  Chris
                </Badge>
              </div>
            </div>

            {/* Center image */}
            <div className="absolute w-[172px] h-[202px] top-[39px] left-[231px]">
              <div className="relative w-[244px] h-[244px] -top-1.5 -left-9 bg-cover bg-[50%_50%]">
                <img
                  className="absolute w-[172px] h-[172px] top-1.5 left-9 object-cover"
                  alt="Image"
                  src=""
                />
              </div>
            </div>

            {/* Bottom left card - "Flex the" */}
            <Card className="absolute w-[255px] h-[131px] top-[251px] left-0 rounded-[14px] backdrop-blur-[5px] border-line-gray">
              <div className="relative w-[183px] h-[83px] top-6 left-9">
                <div className="absolute top-px left-[9px] font-['Manrope-Medium'] text-white text-[44px] tracking-[0.44px] leading-[79.2px]">
                  Flex the
                </div>

                <div className="absolute w-[183px] h-[83px] top-0 left-0">
                  <div className="relative h-[83px]">
                    <div className="absolute w-[179px] h-[79px] top-0.5 left-0.5 border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="absolute w-[5px] h-[5px] top-0 left-0 bg-white border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="absolute w-[5px] h-[5px] top-0 left-[178px] bg-white border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="absolute w-[5px] h-[5px] top-[78px] left-0 bg-white border-[0.6px] border-solid border-[#b133ff]" />
                    <div className="absolute w-[5px] h-[5px] top-[78px] left-[178px] bg-white border-[0.6px] border-solid border-[#b133ff]" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Bottom right card - Color sliders */}
            <Card className="absolute w-[333px] h-[131px] top-[251px] left-[295px] rounded-[14px] backdrop-blur-[5px] border-line-gray">
              {/* Top color slider */}
              <div className="absolute w-60 h-[22px] top-[29px] left-[45px]">
                <div className="relative h-[22px]">
                  <div className="absolute w-60 h-3 top-[5px] left-0 rounded-[50px] [background:linear-gradient(90deg,rgba(216,7,22,1)_0%,rgba(249,100,33,1)_9%,rgba(248,223,69,1)_17%,rgba(139,255,77,1)_28%,rgba(72,255,83,1)_34%,rgba(69,254,144,1)_44%,rgba(57,240,253,1)_52%,rgba(35,139,223,1)_62%,rgba(1,111,247,1)_70%,rgba(24,16,244,1)_77%,rgba(171,0,245,1)_85%,rgba(242,1,151,1)_91%,rgba(239,3,26,1)_100%)]" />
                  <div className="absolute w-[22px] h-[22px] top-0 left-[175px] bg-[#1c11f5] rounded-[11px] border-[6px] border-solid border-white" />
                </div>
              </div>

              {/* Bottom color slider */}
              <div className="absolute w-60 h-[22px] top-[78px] left-[45px]">
                <div className="relative h-[22px]">
                  <img
                    className="absolute w-60 h-3 top-[5px] left-0"
                    alt="Color opacity"
                    src=""
                  />
                  <div className="absolute w-60 h-3 top-[5px] left-0 rounded-[50px] [background:linear-gradient(90deg,rgba(28,17,245,0)_0%,rgba(28,17,245,1)_100%)]" />
                  <div className="absolute w-[22px] h-[22px] top-0 left-[218px] bg-white rounded-[11px] border-[6px] border-solid" />
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
}
