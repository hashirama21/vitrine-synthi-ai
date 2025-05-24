import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import React from "react";

export default function AboutUsSection() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[60px]">
      {/* Content Section */}
      <div className="flex flex-col w-full max-w-[548px] items-start gap-5">
        <span className="font-normal text-[15px] tracking-[1.50px] leading-[27px] text-color-palette-secondary">
          ABOUT US
        </span>

        <h2 className="bg-gradient-to-r from-[rgba(235,241,255,1)] to-[rgba(179,192,222,1)] bg-clip-text text-transparent font-bold text-[46px] tracking-[-0.92px] leading-[55.2px]">
          Artificial intelligence for a sustainable future
        </h2>

        <div className="w-full">
          <p className="font-normal text-gray text-base leading-[28.8px]">
            At Synthi AI, we develop advanced solutions in artificial
            intelligence (AI), robotics, and computer vision to accelerate
            innovation and address the strategic challenges of businesses and
            institutions.
          </p>
          <br />
          <p className="font-normal text-gray text-base leading-[28.8px]">
            Our ambition is clear: to make Africa a global leader in AI by
            creating ethical, high-performance, and accessible technologies
            capable of transforming key sectors such as health, agriculture,
            finance and climate.
          </p>
          <br />
          <p className="font-normal text-gray text-base leading-[28.8px]">
            We beleive that AI is not just a technology, but a powerful lever
            for development and economic transformation. That&apos;s why we
            collaborate with researchers, startups, businesses, and governments
            to build a strong technological ecosystem.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative w-full max-w-[565px] h-[467px]">
        {/* Credit card images */}
        <div className="absolute w-80 h-[201px] top-[35px] left-[245px] bg-[url(/creditcard-3.png)] bg-cover bg-center" />
        <div className="absolute w-[400px] h-[251px] top-[216px] left-[121px] bg-[url(/creditcard-1.png)] bg-cover bg-center" />

        {/* Statistics Card */}
        <Card className="absolute w-72 h-[344px] top-0 left-0 rounded-[14px] backdrop-blur-[5px] backdrop-brightness-[100%] border-line-gray">
          <CardContent className="p-0 relative h-full">
            {/* Header */}
            <div className="p-[22px] flex justify-between items-center">
              <span className="font-medium text-light-gray text-base leading-[28.8px]">
                Statistics
              </span>
              <button className="text-gray">
                <MoreHorizontal className="w-6 h-6" />
              </button>
            </div>

            {/* Chart */}
            <div className="flex justify-center mt-[20px]">
              <div className="relative w-[139px] h-[91px]">
                {/* SVG circles representing the chart */}
                <div className="relative w-[136px] h-[74px]">
                  <img
                    src=""
                    alt="Chart background"
                    className="absolute w-[136px] h-[74px]"
                  />
                  <img
                    src=""
                    alt="Chart segment 1"
                    className="absolute w-[133px] h-[74px]"
                  />
                  <img
                    src=""
                    alt="Chart segment 2"
                    className="absolute w-[127px] h-[74px]"
                  />
                  <img
                    src=""
                    alt="Chart segment 3"
                    className="absolute w-[71px] h-[74px]"
                  />
                  <img
                    src=""
                    alt="Chart segment 4"
                    className="absolute w-[45px] h-[69px] top-[7px]"
                  />
                </div>

                {/* Center text */}
                <div className="absolute w-[58px] h-[53px] top-[38px] left-[44px] text-center">
                  <span className="block text-[9px] text-gray leading-[16.2px]">
                    Total Activity
                  </span>
                  <span className="block font-semibold text-2xl text-light-gray leading-[43.2px]">
                    436
                  </span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-around mt-[20px]">
              <div className="flex items-start gap-3.5">
                <div className="w-2 h-2 mt-1.5 bg-[#2663ff] rounded" />
                <div>
                  <span className="block text-[11px] text-[#c2cde7] leading-[18.7px]">
                    Income
                  </span>
                  <span className="block font-bold text-[13px] text-light-gray leading-[22.1px]">
                    305
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-2 h-2 mt-1.5 bg-[#f6554b] rounded" />
                <div>
                  <span className="block text-xs text-[#c2cde7] leading-[20.4px]">
                    Expense
                  </span>
                  <span className="block font-bold text-[13px] text-light-gray leading-[22.1px]">
                    58
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="absolute w-[200px] h-11 top-[259px] left-[43px]">
              <button className="w-full h-full rounded border border-solid border-line-gray flex items-center justify-center">
                <span className="font-semibold text-gray text-[13px] leading-[16.9px]">
                  All Activity
                </span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
