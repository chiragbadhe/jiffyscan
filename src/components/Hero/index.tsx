import React, { useState } from "react";
import SearchHero from "./searchHero";
import Image from "next/image";
import filter from "../../../public/filter.svg";
import InReview from "./inreview";
import Completed from "./completed";
import FilterBy from "./filterBy";

type Props = {};

function Hero({}: Props) {
  const [activeTab, setActiveTab] = useState("Completed");

  return (
    <div className="w-full container flex">
      <div className="min-w-[1108px]">
        <div className="border-b-2 border-[#EBEBEB] pb-[17.5px] mr-[24px] flex justify-between items-center">
          <div>
            <span className="text-[20px] font-semibold border-r pr-[24px]">
              Work History
            </span>
            <span className="space-x-[24px] pl-[24px] text-[18px] text-[#64758B]">
              <span
                className={`pb-[27px] border-b-2 cursor-pointer ${
                  activeTab === "Completed"
                    ? "border-[#6366F1] text-[#252424]"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("Completed")}
              >
                Completed
              </span>
              <span
                className={`pb-[27px] border-b-2 cursor-pointer ${
                  activeTab === "InReview"
                    ? "border-[#6366F1] text-[#252424]"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab("InReview")}
              >
                In review
              </span>
            </span>
          </div>
          <div className="pr-[24px] space-x-[16px] flex items-center">
            <div className="flex space-x-[8px] text-[#64748B] border-l pl-[20px]">
              <Image src={filter} height={16} width={16} alt={"filter"} />
              <span>Filter By</span>
            </div>
            <FilterBy />
          </div>
        </div>
        <div className="pr-[24px] pt-[16px]">
          {activeTab === "InReview" && <InReview />}
          {activeTab === "Completed" && <Completed />}
        </div>
      </div>
      <div className="w-[2px] h-[842px] bg-[#EBEBEB]"></div>

      <div className="items-start flex w-full pl-[40px]">
        <SearchHero />
      </div>
    </div>
  );
}

export default Hero;
