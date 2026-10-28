import { cn } from "@/lib/utils";

/**
 * Abstract GIS-style map: grid, polygons, routes, nodes and coordinate ticks.
 * Purely decorative — hidden from assistive tech.
 */
export function GeoMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 520"
      role="presentation"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="geo-poly" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="geo-poly-2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary-soft)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--color-primary-soft)" stopOpacity="0" />
        </linearGradient>
        <pattern id="geo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="var(--color-primary)"
            strokeOpacity="0.1"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="600" height="520" fill="url(#geo-grid)" />

      {/* topographic contours */}
      <g fill="none" stroke="var(--color-primary)" strokeOpacity="0.16">
        <path d="M40 380c70-60 130-30 190-80s120-140 210-120" />
        <path d="M20 420c80-70 150-35 215-90s125-150 225-130" />
        <path d="M60 340c60-50 115-25 165-70s110-125 190-108" />
      </g>

      {/* polygons / layers */}
      <polygon
        points="120,150 260,110 320,190 240,270 130,240"
        fill="url(#geo-poly)"
        stroke="var(--color-primary)"
        strokeOpacity="0.5"
        strokeWidth="1.2"
      />
      <polygon
        points="330,250 460,220 500,320 390,370"
        fill="url(#geo-poly-2)"
        stroke="var(--color-primary-soft)"
        strokeOpacity="0.45"
        strokeWidth="1.2"
      />

      {/* routes */}
      <g fill="none" strokeWidth="1.6" strokeLinecap="round">
        <path
          d="M90 430L200 350 300 380 380 300 500 260"
          stroke="var(--color-primary)"
          strokeOpacity="0.75"
          className="animate-dash"
        />
        <path
          d="M150 120L250 200 330 180 430 240"
          stroke="var(--color-primary-soft)"
          strokeOpacity="0.6"
          className="animate-dash"
        />
      </g>

      {/* nodes */}
      <g fill="var(--color-primary)">
        {[
          [90, 430],
          [200, 350],
          [300, 380],
          [380, 300],
          [500, 260],
          [150, 120],
          [330, 180],
          [430, 240],
          [260, 110],
        ].map(([cx, cy], i) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="3" className="animate-node" style={{ animationDelay: `${i * 0.35}s` }} />
            <circle cx={cx} cy={cy} r="10" fill="none" stroke="var(--color-primary)" strokeOpacity="0.25" />
          </g>
        ))}
      </g>

      {/* coordinate ticks */}
      <g stroke="var(--color-primary)" strokeOpacity="0.35">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`t-${i}`} x1={40 + i * 45} y1="20" x2={40 + i * 45} y2={i % 3 === 0 ? 34 : 27} />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`l-${i}`} x1="20" y1={60 + i * 45} x2={i % 3 === 0 ? 34 : 27} y2={60 + i * 45} />
        ))}
      </g>

      <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-muted-foreground)" opacity="0.7">
        <text x="40" y="500">
          LAT -8.2833
        </text>
        <text x="430" y="500">
          LON -35.9758
        </text>
      </g>
    </svg>
  );
}
