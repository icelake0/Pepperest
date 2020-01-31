import React from 'react'

const SpinnerIcon = props => (
  <svg
    className="spinner"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <linearGradient
        id="a"
        x1="-29.984%"
        x2="62.454%"
        y1="37.909%"
        y2="37.909%"
      >
        <stop offset="0%" stop-color="#FFF" stop-opacity="0" />
        <stop offset="100%" stop-color="#FFF" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      fill-rule="evenodd"
      stroke="url(#a)"
      strokeWidth="4"
      d="M72 30c5.523 0 10-4.477 10-10a9.97 9.97 0 0 0-3.048-7.188A9.967 9.967 0 0 0 72 10c-5.523 0-10 4.477-10 10"
      transform="translate(-60 -8)"
    />
  </svg>
);

export default SpinnerIcon;