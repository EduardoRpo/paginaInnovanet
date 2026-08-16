export function NetworkSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="netGrad" x1="60" y1="640" x2="660" y2="80">
          <stop stopColor="#00AAFF" stopOpacity="0.75" />
          <stop offset="0.55" stopColor="#2F7BFF" stopOpacity="0.35" />
          <stop offset="1" stopColor="#C8CDD4" stopOpacity="0.12" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#softGlow)" opacity="0.9">
        <path
          d="M90 470 L190 290 L310 360 L430 160 L560 240 L640 180"
          stroke="url(#netGrad)"
          strokeWidth="1.6"
        />
        <path
          d="M120 210 L240 250 L340 110 L470 170 L580 120"
          stroke="url(#netGrad)"
          strokeWidth="1.3"
          opacity="0.75"
        />
        <path
          d="M70 340 L180 400 L290 280 L420 320 L530 220 L650 300"
          stroke="url(#netGrad)"
          strokeWidth="1.1"
          opacity="0.55"
        />
        <path
          d="M150 560 L260 500 L380 560 L500 470 L610 520"
          stroke="url(#netGrad)"
          strokeWidth="1.1"
          opacity="0.4"
        />
      </g>
      {[
        [90, 470],
        [190, 290],
        [310, 360],
        [430, 160],
        [560, 240],
        [640, 180],
        [120, 210],
        [240, 250],
        [340, 110],
        [470, 170],
        [580, 120],
        [180, 400],
        [290, 280],
        [420, 320],
        [530, 220],
        [260, 500],
        [380, 560],
        [500, 470],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 4 === 0 ? 5 : 3.2} fill="#00AAFF" opacity="0.75">
          <animate
            attributeName="opacity"
            values="0.35;0.95;0.35"
            dur={`${3 + (i % 5) * 0.4}s`}
            repeatCount="indefinite"
            begin={`${i * 0.15}s`}
          />
        </circle>
      ))}
      <path
        d="M470 430 L560 370 L640 430 L560 490 Z"
        stroke="#00AAFF"
        strokeWidth="1.4"
        opacity="0.35"
      />
      <path
        d="M90 130 L170 70 L250 130 L170 190 Z"
        stroke="#C8CDD4"
        strokeWidth="1.2"
        opacity="0.2"
      />
    </svg>
  );
}

export function ServiceIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "service-item__icon",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "software":
      return (
        <svg {...common}>
          <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M18 38h12M24 32v6" stroke="currentColor" strokeWidth="1.7" />
          <path d="M15 18h10M15 24h18" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "soporte":
      return (
        <svg {...common}>
          <path
            d="M14 22a10 10 0 0120 0v8a4 4 0 01-4 4h-3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M14 26H10a2.5 2.5 0 01-2.5-2.5v-3A2.5 2.5 0 0110 18h4M34 26h4a2.5 2.5 0 002.5-2.5v-3A2.5 2.5 0 0038 18h-4"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );
    case "redes":
      return (
        <svg {...common}>
          <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="34" r="4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="36" cy="34" r="4" stroke="currentColor" strokeWidth="1.7" />
          <path d="M21 17L14 31M27 17L34 31M16 34h16" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "servidores":
      return (
        <svg {...common}>
          <rect x="9" y="9" width="30" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <rect x="9" y="21" width="30" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <rect x="9" y="33" width="30" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="14" cy="14" r="1.4" fill="currentColor" />
          <circle cx="14" cy="26" r="1.4" fill="currentColor" />
        </svg>
      );
    case "automatizacion":
      return (
        <svg {...common}>
          <circle cx="16" cy="24" r="5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="32" cy="16" r="4" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="1.7" />
          <path d="M21 22l7-4M21 26l7 4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "consultoria":
      return (
        <svg {...common}>
          <path d="M12 34V18l12-8 12 8v16" stroke="currentColor" strokeWidth="1.7" />
          <path d="M19 34v-10h10v10" stroke="currentColor" strokeWidth="1.7" />
          <path d="M22 14.5l2-1.3 2 1.3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="12" y="10" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M18 18h12M18 24h12M18 30h8" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
  }
}

export function ProductShowcase() {
  return (
    <div className="product-stage" aria-hidden="true">
      <div className="product-stage__glow" />
      <div className="product-panel">
        <div className="product-panel__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="product-panel__grid">
          <div className="product-kpi">
            <small>Operación</small>
            <strong>+34%</strong>
            <em>eficiencia</em>
          </div>
          <div className="product-kpi">
            <small>Soporte</small>
            <strong>24/7</strong>
            <em>disponible</em>
          </div>
          <div className="product-chart">
            <svg viewBox="0 0 220 90" fill="none">
              <path
                d="M8 70 C40 66, 50 40, 80 44 C110 48, 120 20, 150 28 C180 36, 190 18, 212 14"
                stroke="url(#chart)"
                strokeWidth="2.5"
              />
              <defs>
                <linearGradient id="chart" x1="0" y1="0" x2="220" y2="0">
                  <stop stopColor="#00AAFF" />
                  <stop offset="1" stopColor="#C8CDD4" />
                </linearGradient>
              </defs>
              <circle cx="212" cy="14" r="4" fill="#00AAFF" />
            </svg>
          </div>
          <div className="product-list">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="product-orbit" />
    </div>
  );
}
