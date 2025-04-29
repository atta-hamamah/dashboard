import React from "react";

type KPITypes = {
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  title: string;
  value: number;
};

const KPI = ({
  borderColor,
  backgroundColor,
  textColor,
  icon,
  title,
  value,
}: KPITypes) => {
  return (
    <div
      className="mb-2 flex h-24 w-32 flex-col items-center justify-around space-y-1 rounded-md border-2 py-2"
      style={{
        borderColor: `#${borderColor}`,
        backgroundColor: `#${backgroundColor}`,
      }}
    >
      <img src={icon} width={28} height={28} />
      <h1
        className="text-center font-sans text-xs font-semibold"
        style={{
          color: `#${textColor}`,
        }}
      >
        {title}
      </h1>
      <h2
        className="font-sans text-sm font-medium"
        style={{
          color: `#${textColor}`,
        }}
      >
        {value}
      </h2>
    </div>
  );
};

export default KPI;
