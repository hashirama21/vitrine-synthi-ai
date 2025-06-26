"use client";

import { Badge, Check } from "lucide-react";
import Image from "next/image";
import { memo } from "react";
import { Card } from "../ui/card";

// Memoize static data outside component to prevent recreating on each render
const BULLET_POINTS = [
  "The AI leader in Africa: Unique expertise in AI applied to the continent's needs.",
  "An ethical and responsible approach: Secure and accessible AI solutions.",
  "A strong network of partners: Collaboration with businesses, startups, universities, and institutions.",
  "Concrete impact: Transformation of key sectors and improvement of people's lives.",
  "Cutting-edge technology: Integration of the latest advances in AI, NLP, and computer vision.",
] as const;

// Memoize bullet point component for better performance
const BulletPoint = memo(({ text, index }: { text: string; index: number }) => (
  <div className="flex items-center gap-3.5 w-full">
    <div className="relative w-[34px] h-[34px] bg-[#121523] rounded-full flex items-center justify-center shrink-0">
      <Check className="w-3 h-2.5 text-white" aria-hidden="true" />
    </div>
    <p className="font-['Arial'] text-[15px] leading-[1.8] text-light-gray">
      {text}
    </p>
  </div>
));

BulletPoint.displayName = "BulletPoint";

// Memoize cursor component
const Cursor = memo(({ 
  name, 
  color, 
  position 
}: { 
  name: string; 
  color: string; 
  position: { top: string; left: string } 
}) => (
  <div 
    className="absolute"
    style={{ 
      top: position.top, 
      left: position.left,
      width: name === "Emre" ? "98px" : "88px",
      height: name === "Emre" ? "57px" : "56px"
    }}
  >
    <div className="relative h-full">
      {name === "Emre" ? (
        <div className="absolute top-6 left-[65px] w-[33px] h-[33px]">
          <Image
            src="/images/cursor-emre.svg"
            alt=""
            width={33}
            height={33}
            priority
          />
        </div>
      ) : (
        <div className="absolute w-6 h-6 top-0 left-0">
          <Image
            src="/images/component-node.svg"
            alt=""
            width={24}
            height={24}
            priority
          />
        </div>
      )}
      <Badge 
        className={`absolute px-4 py-0.5 rounded-full font-['Arial'] text-lg text-white ${
          name === "Emre" 
            ? "top-0 left-0 bg-[#3549ff]" 
            : "top-[23px] left-3 bg-[#ff603d]"
        }`}
      >
        {name}
      </Badge>
    </div>
  </div>
));

Cursor.displayName = "Cursor";

export default function AssetsDisplaySection() {
  return (
    <section className="py-6" aria-labelledby="why-choose-us">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-[100px] px-[60px]">
          {/* Left content - Why choose us */}
          <div className="flex flex-col items-start gap-10">
            <header className="flex flex-col items-start gap-[22px]">
              <div className="relative">
                <p className="font-['Arial'] text-[15px] tracking-[0.1em] leading-[1.8] text-color-palette-secondary uppercase">
                  Commitment to Excellence
                </p>
                <h2 
                  id="why-choose-us"
                  className="mt-[14px] w-[510px] font-['Arial_Rounded_MT_Bold'] text-[46px] leading-[1.2] bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent"
                >
                  Why choose us
                </h2>
              </div>

              <ul className="flex flex-col w-[480px] gap-[18px]" role="list">
                {BULLET_POINTS.map((point, index) => (
                  <li key={index}>
                    <BulletPoint text={point} index={index} />
                  </li>
                ))}
              </ul>
            </header>
          </div>

          {/* Right content - Interactive design element */}
          <div className="relative">
            <Card className="relative w-[545px] h-[423px] rounded-[14px] backdrop-blur-[5px] border-line-gray overflow-visible">
              <div className="relative w-[628px] h-[421px] top-px left-[-45px]">
                {/* Background lines */}
                <Image
                  className="absolute w-[543px] h-[421px] top-0 left-[46px]"
                  alt=""
                  src="/images/background-lines.svg"
                  width={543}
                  height={421}
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute w-[544px] h-[421px] top-0 left-[45px] rounded-[13px] bg-gradient-corner" />

                {/* Cursors */}
                <Cursor 
                  name="Emre" 
                  color="#3549ff" 
                  position={{ top: "51px", left: "80px" }} 
                />
                <Cursor 
                  name="Chris" 
                  color="#ff603d" 
                  position={{ top: "140px", left: "463px" }} 
                />

                {/* Center image */}
                <div className="absolute w-[172px] h-[202px] top-[39px] left-[231px]">
                  <div className="relative w-[244px] h-[244px] -top-1.5 -left-9">
                    <Image
                      className="absolute w-[172px] h-[172px] top-1.5 left-9 object-cover rounded-lg"
                      alt="AI visualization"
                      src="/images/ai-visualization.png"
                      width={172}
                      height={172}
                      priority
                    />
                  </div>
                </div>

                {/* Bottom left card - "Flex the" */}
                <Card className="absolute w-[255px] h-[131px] top-[251px] left-0 rounded-[14px] backdrop-blur-[5px] border-line-gray">
                  <div className="relative w-[183px] h-[83px] top-6 left-9">
                    <p className="absolute top-px left-[9px] font-['Manrope'] font-medium text-white text-[44px] tracking-[0.01em] leading-[1.8]">
                      Flex the
                    </p>

                    {/* Border decoration */}
                    <div className="absolute w-[183px] h-[83px] top-0 left-0">
                      <div className="relative h-[83px]">
                        <div className="absolute w-[179px] h-[79px] top-0.5 left-0.5 border-[0.6px] border-solid border-[#b133ff]" />
                        {[
                          { top: "0", left: "0" },
                          { top: "0", left: "178px" },
                          { top: "78px", left: "0" },
                          { top: "78px", left: "178px" }
                        ].map((pos, idx) => (
                          <div
                            key={idx}
                            className="absolute w-[5px] h-[5px] bg-white border-[0.6px] border-solid border-[#b133ff]"
                            style={{ top: pos.top, left: pos.left }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Bottom right card - Color sliders */}
                <Card className="absolute w-[333px] h-[131px] top-[251px] left-[295px] rounded-[14px] backdrop-blur-[5px] border-line-gray">
                  {/* Top color slider */}
                  <div className="absolute w-60 h-[22px] top-[29px] left-[45px]">
                    <div className="relative h-[22px]">
                      <div 
                        className="absolute w-60 h-3 top-[5px] left-0 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #d80716 0%, #f96421 9%, #f8df45 17%, #8bff4d 28%, #48ff53 34%, #45fe90 44%, #39f0fd 52%, #238bdf 62%, #016ff7 70%, #1810f4 77%, #ab00f5 85%, #f20197 91%, #ef031a 100%)"
                        }}
                        role="slider"
                        aria-label="Color picker"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div className="absolute w-[22px] h-[22px] top-0 left-[175px] bg-[#1c11f5] rounded-full border-[6px] border-solid border-white shadow-sm" />
                    </div>
                  </div>

                  {/* Bottom opacity slider */}
                  <div className="absolute w-60 h-[22px] top-[78px] left-[45px]">
                    <div className="relative h-[22px]">
                      <Image
                        className="absolute w-60 h-3 top-[5px] left-0"
                        alt=""
                        src="/images/opacity-background.svg"
                        width={240}
                        height={12}
                      />
                      <div 
                        className="absolute w-60 h-3 top-[5px] left-0 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, rgba(28,17,245,0) 0%, rgba(28,17,245,1) 100%)"
                        }}
                        role="slider"
                        aria-label="Opacity"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                      <div className="absolute w-[22px] h-[22px] top-0 left-[218px] bg-white rounded-full border-[6px] border-solid border-[#1c11f5] shadow-sm" />
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}