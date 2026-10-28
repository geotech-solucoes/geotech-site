export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="34 34 232 232"
      role="presentation"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id="geotech-logo-globe">
          <circle cx="150" cy="150" r="110" />
        </clipPath>
      </defs>
      <circle cx="150" cy="150" r="110" fill="#0B3C49" />
      <g
        clipPath="url(#geotech-logo-globe)"
        fill="none"
        stroke="#19A38A"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.9"
      >
        <path d="M30 210 C80 170 110 215 160 185 C210 155 240 190 280 160" />
        <path d="M30 245 C90 205 120 250 175 220 C225 190 250 225 280 200" />
        <path d="M30 175 C70 140 120 175 165 150 C205 128 245 150 280 125" />
        <path d="M30 140 C75 105 120 130 160 110 C200 92 245 105 280 85" />
        <path d="M30 275 C95 240 130 280 190 255 C235 235 260 255 280 240" />
      </g>
      <circle cx="150" cy="150" r="110" fill="none" stroke="#19A38A" strokeWidth="8" />
      <g transform="translate(150 140)">
        <path
          d="M0,-78 C-32,-78 -52,-55 -52,-28 C-52,8 0,66 0,66 C0,66 52,8 52,-28 C52,-55 32,-78 0,-78 Z"
          fill="#F59E0B"
          stroke="#0B3C49"
          strokeWidth="6"
        />
        <circle cx="0" cy="-26" r="18" fill="#0B3C49" />
        <circle cx="0" cy="-26" r="6" fill="#19A38A" />
      </g>
    </svg>
  );
}
