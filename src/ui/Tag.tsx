import React from "react";

interface TagProps {
  title: string;
  titleColor?: string;
  bgColor?: string;
}

const Tag: React.FC<TagProps> = ({
  title,
  titleColor = "text-orange-500",
  bgColor = "bg-orange-100",
}) => {
  return (
    <span
      className={`inline-block rounded-full px-4 py-1 ${bgColor} ${titleColor} text-lg font-semibold`}
    >
      {title}
    </span>
  );
};

export default Tag;
