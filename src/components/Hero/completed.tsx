import React from "react";
import img1 from "../../../public/img1.svg";
import DefaultCard from "../Cards/defaultCard";

type Props = {};

function Completed({}: Props) {
  return (
    <div>
      <DefaultCard
        imgSrc={img1}
        title="Design Earn’s Talent Leaderboard"
        organizer="Superteam"
        date="12/02/23"
        amount={700}
        currency="USDC"
        place="1st Place"
        tags={["Design", "Frontend"]}
        participants={36}
      />
    </div>
  );
}

export default Completed;
