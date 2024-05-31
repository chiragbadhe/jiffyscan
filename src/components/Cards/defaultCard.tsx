import React from "react";
import Image, { StaticImageData } from "next/image";
import usdc from "../../../public/usdc.svg";
import trophy from "../../../public/trophy.svg";

type DefaultCardProps = {
  imgSrc: StaticImageData;
  title: string;
  organizer: string;
  date: string;
  amount?: number;
  currency?: string;
  place?: string;
  tags: string[];
  participants?: number;
};

type TagStyleType = {
  [key: string]: string;
};

const tagStyles: TagStyleType = {
  Design: "text-[#8948F2] bg-[#F2EDFF]",
  Frontend: "text-[#3EA7FF] bg-[#EBF3FF]",
  Backend: "text-[#FF8370] bg-[#FFF2EB]",
  Content: "text-[#5EA8C4] bg-[#EFF6F8]",
  Default: "text-[#6B7280] bg-[#F3F4F6]",
};

function DefaultCard({
  imgSrc,
  title,
  organizer,
  date,
  amount,
  currency,
  place,
  tags,
  participants,
}: DefaultCardProps) {
  return (
    <div className="py-[18px] px-[32px] flex hover:bg-[#EDF2F7] hover:rounded-[8px] duration-300">
      <div>
        <Image src={imgSrc} height={80} width={80} alt="card" />
      </div>
      <div className="px-[24px] flex flex-col justify-between py-[6px] w-full">
        <div className="flex justify-between w-full items-center">
          <div className="space-x-[5px]">
            <span className="text-[20px] font-semibold">{title}</span>
            <span className="text-[14px] text-[#64758B]">by</span>
            <span className="text-[20px] font-semibold text-[#94A3B8]">
              {organizer}
            </span>
          </div>
          <span className="text-[18px] text-[#64758B]">{date}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex text-[18px] space-x-[16px]">
            {amount && (
              <>
                <span className="flex space-x-[4px]">
                  <Image src={usdc} height={24} width={24} alt="usdc" />
                  <span className="font-semibold">{amount}</span>
                  <span className="text-[#94A3B8]">{currency}</span>
                </span>
                <span className="w-[1px] mx-[12px] bg-[#CBD8E9]"></span>
              </>
            )}

            {place && (
              <span className="text-[#64758B] flex items-center space-x-[4px]">
                <Image src={trophy} height={14} width={14} alt="trophy" />
                <p>{place}</p>
              </span>
            )}

            {tags.map((tag, index) => {
              const tagStyle = tagStyles[tag] || tagStyles.Default;
              return (
                <span
                  key={index}
                  className={`px-[12px] py-[4px] text-[12px] rounded-[4px] ${tagStyle}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <div>
            <p className="text-[18px] space-x-[6px]">
              <span>{participants}</span>
              <span className="text-[#64758B]">Participants</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultCard;
