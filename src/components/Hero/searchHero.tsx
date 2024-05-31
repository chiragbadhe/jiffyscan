import Image from "next/image";
import React from "react";
import search from "../../../public/search.svg";

type Props = {};

function SearchHero({}: Props) {
  return (
    <div className="rounded-full w-full px-[26px] py-[16px] text-[18px] bg-[#F1F5F9] flex space-x-[16px]">
      <Image src={search} height={16} width={16} alt={"jiffyscan"} />
      <input
        type="text"
        className="outline-none bg-transparent  text-[#64758B] w-full"
        placeholder="Search Bounties, Profiles, and more..."
      />
    </div>
  );
}

export default SearchHero;
