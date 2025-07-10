import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Cricket",
  "News",
  "T-Series",
  "Valentine",
  "Soccer",
  "Music",
  "StudyIAS",
  "Cartoons",
  "CSGO",
  "Ind Vs Eng",
  "Punjabi",
  "Hollywood",
  "Bollywood",
  "Samsung",
  "Trump",
  "Europe",
  "Hyundai",
];

const ButtonList = () => {
  return (
    <div className="max-w-full overflow-x-auto">
      <div className="flex whitespace-nowrap">
        {list.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
