import React from "react";
import Lightning from "../../../public/Lightning.svg";
import arrow from "../../../public/arrow.svg";
import Image from "next/image";

type Props = {};

function SearchHeader({}: Props) {
  return (
    <div className=" border-2 border-[#DADCE0] rounded-full px-[24px] text-[14px] text-black flex min-w-[360px] search-shadow hover:duration-300 active:border-[#195BDF] ">
      <div className="py-[8px] flex ">
        <div className="flex border-r pr-[8px]">
          <Image src={Lightning} height={25} width={25} alt={"lightning"} />
          <Image src={arrow} height={24} width={24} alt={"arrow"} />
        </div>
        <input
          type="text"
          placeholder="Search an userOp"
          className="outline-none pl-[8px]"
        />
      </div>
    </div>
  );
}

export default SearchHeader;
