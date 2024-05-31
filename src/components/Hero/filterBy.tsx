import React, { useState } from "react";

type Props = {};

const filterOptions = ["All", "Design", "Blockchain", "Frontend", "Content"];

function FilterBy({}: Props) {
  const [selectedOption, setSelectedOption] = useState(filterOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-[152px]">
      <div
        className="border rounded-[4px] p-[8px] text-[#6366F1] cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <div className="absolute bg-white w-full border mt-[8px] rounded-[4px]">
          {filterOptions
            .filter((option) => option !== selectedOption)
            .map((option, index) => (
              <div
                key={index}
                className="p-[8px] px-[10px] hover:bg-black/5 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default FilterBy;
