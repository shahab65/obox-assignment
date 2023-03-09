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
const Arrow = ({
  fill = "#25262c",
  width = 15,
  height = 8,
  direction = "down",
  className = "",
  onClick = () => {},
}: Props) => {
  const dir = getDirection(direction);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10.283 6"
      style={{
        transform: `rotate(${dir}deg)`,
        transition: "transform 0.25s ease-out",
      }}
      onClick={onClick}
      role="button"
      className={className}
    >
      <path
        fill={fill}
        d="M1.231 10.074l4.623-4.583a.49.49 0 0 0 0-.7L1.231.209a.726.726 0 0 0-1.02 0 .712.712 0 0 0 0 1.011l3.954 3.922-3.954 3.92a.712.712 0 0 0 0 1.012.726.726 0 0 0 1.02 0"
        transform="rotate(90 5.141 5.142)"
      />
    </svg>
  );
};

export default Arrow;
