import React from 'react';

const TickSvg = () => {
  return (
    <svg
      className="w-5 h-5 text-emerald-600"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="#10B981"
        strokeWidth="1.5"
        fill="#ECFDF5"
      />
      <path
        d="M8 12.5l2 2 5-5"
        stroke="#047857"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TickSvg;
