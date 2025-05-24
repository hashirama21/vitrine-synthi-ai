import { BarChart3, Cloud, Globe, Users, Zap } from "lucide-react";
import React from "react";

export default function FeaturesOverviewSection() {
  // Data for value cards to enable mapping
  const valueCards = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Innovation",
      description:
        "Designing cutting-edge solutions adapted to the market realities.",
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Excellence",
      description:
        "Maintaining high technological standards and ensuring reliable solutions.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Ethics & Transparency",
      description: "Ensuring responsible, secure, and user-respectful AI.",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Society Impact",
      description:
        "Improving people's lives and contributing to the Sustainable Development Goals (SDGs).",
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Collaboration",
      description:
        "Working with key players to build a strong AI ecosystem in Africa.",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-20 w-full py-10">
      <div className="flex flex-col items-center gap-3.5 max-w-xl">
        <p className="font-normal text-[15px] text-center tracking-[1.50px] leading-[27px] text-color-palette-secondary">
          THE DNA OF OUR AI
        </p>

        <h2 className="[background:linear-gradient(95deg,rgba(235,241,255,1)_0%,rgba(179,192,222,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent text-[46px] text-center tracking-[-0.92px] leading-[55.2px] font-normal">
          Our Values
        </h2>

        <p className="font-normal text-gray text-base text-center leading-[28.8px] max-w-[592px]">
          We work closely with our clients to understand their unique challenges
          and deliver tailored solutions that drive tangible results.
        </p>
      </div>

      <div className="w-full max-w-[1160px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[100px] gap-y-[80px]">
          {valueCards.map((card, index) => (
            <div key={index} className="flex flex-col gap-5">
              <div className="w-16 h-16 rounded-[32px] border border-solid border-line-gray backdrop-blur flex items-center justify-center">
                {card.icon}
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="font-normal text-light-gray text-2xl tracking-[-0.48px] leading-[43.2px]">
                  {card.title}
                </h3>
                <p className="font-normal text-gray text-base leading-[28.8px] max-w-[320px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
