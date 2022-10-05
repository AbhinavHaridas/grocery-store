import React, { useState } from "react";
import SearchNavbar from "./SearchNavbar";

const TrackOrder = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div>
      <SearchNavbar
        setIsSelected={setIsSelected}
        isSelected={isSelected}
      ></SearchNavbar>
      <div onClick={() => setIsSelected(false)} style={{ height: 100 }}></div>
    </div>
  );
};

export default TrackOrder;
