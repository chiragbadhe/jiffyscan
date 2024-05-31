import React from "react";
import DefaultCard from "../Cards/defaultCard";
import img1 from "../../../public/img1.svg";

type Props = {};

function InReview({}: Props) {
  return (
    <div>
      <DefaultCard
        imgSrc={img1}
        title="Armada UI/UX Review"
        organizer="Dean’s List Dao"
        date="12/02/23"
        tags={["Design", "Frontend", "Backend"]}
        participants={12}
      />

      <DefaultCard
        imgSrc={img1}
        title="Design Earn’s Talent Leaderboard"
        organizer="Superteam"
        date="12/02/23"
        tags={["Design", "Backend"]}
        participants={23}
      />
    </div>
  );
}

export default InReview;
