import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const progressbarStyles = {
  path: {
    stroke: "#111111",
  },
  trail: {
    stroke: "#eeeeee",
  },
  text: {
    fill: "#111111",
    fontSize: "24px",
  },
};

const CircularItem = ({ inView, value, title }) => {
  const [barValue, setFullBody] = useState(value);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (barValue < value) {
          setFullBody(barValue + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
    }
  }, [inView, barValue]);

  return (
    <div className="bg-pink w-[150x] lg:w-[275px] flex flex-col item-center gap-y-6">
      <CircularProgressbar strokeWidth={1} value={barValue} styles={progressbarStyles} text={`${barValue}%`} />
      <div className="uppercase font-light tracking-[1.2px] text-center">{title}</div>
    </div>
  );
};

export default CircularItem;
