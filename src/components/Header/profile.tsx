import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import avatar from "../../../public/Avatar.svg";
import user from "../../../public/user.svg";
import dashboard from "../../../public/dashboard.svg";
import code from "../../../public/code.svg";
import logout from "../../../public/logout.svg";

type Props = {};

function Profile({}: Props) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex space-x-[12px] cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image src={avatar} height={40} width={40} alt={"jiffyscan"} />
        <div className="flex flex-col text-[14px]">
          <span className="font-semibold">Olivia Rhye</span>
          <span className="font text-[#5A5A62]">olivia@jiffyscan.xyz</span>
        </div>
      </div>
      {dropdownVisible && (
        <div className="absolute mt-[20px] border border-[#DADCE0] rounded-[8px] font-medium min-w-[208px] cursor-pointer text-[#5A5A62] bg-white shadow-lg">
          <span className="px-[16px] pt-[10px] space-x-[12px] flex">
            <Image src={user} height={16} width={16} alt={"jiffyscan"} />
            <p>View Profile</p>
          </span>
          <span className="px-[16px] pt-[10px] space-x-[12px] flex">
            <Image src={dashboard} height={16} width={16} alt={"jiffyscan"} />
            <p>Dashboard</p>
          </span>
          <span className="px-[16px] pt-[10px] space-x-[12px] flex  pb-[5px]">
            <Image src={code} height={16} width={16} alt={"jiffyscan"} />
            <p>Api</p>
          </span>
          <span className="px-[16px] pb-[10px] pt-[5px] space-x-[12px] flex border-t">
            <Image src={logout} height={16} width={16} alt={"jiffyscan"} />
            <p>Logout</p>
          </span>
        </div>
      )}
    </div>
  );
}

export default Profile;
