import React from "react";
const getDirection = (dir: string) => {
  if (dir === "right") return 270;
  if (dir === "left") return 90;
  if (dir === "up") return 180;
  return 0;
};

interface Props {
  fill?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  direction?: "up" | "left" | "right" | "down";
  className?: string;
}
const Tick = ({ fill = "indigo", width = 30, height = 16 }: Props) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 " />
    </svg>
  );
};

export default Tick;
