// No "use client" needed — all animation is CSS/SMIL, no interactivity required.

export function AboutVisual() {
  return (
    <div className="relative aspect-[4/3] rounded-xl shadow-lg overflow-hidden border border-border">
      <svg
        viewBox="0 0 480 360"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="abtBg" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#EFF6FF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </radialGradient>
          <pattern id="abtDots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="11" cy="11" r="0.9" fill="#1D4ED8" fillOpacity="0.07" />
          </pattern>
        </defs>

        <style>{`
          text { font-family: 'Plus Jakarta Sans', sans-serif; }

          @keyframes abtDashIn { to { stroke-dashoffset: 16; } }
          @keyframes abtRingPulse {
            0%, 100% { r: 52; stroke-opacity: 0.22; }
            50%       { r: 68; stroke-opacity: 0;   }
          }
          @keyframes abtFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }

          /* Lines flow inward (toward MC) */
          .abt-line {
            stroke-dasharray: 5 5;
            animation: abtDashIn 2s linear infinite;
          }

          /* Nodes fade in one by one */
          .abt-n1 { opacity: 0; animation: abtFadeIn 0.35s ease-out forwards 0.4s; }
          .abt-n2 { opacity: 0; animation: abtFadeIn 0.35s ease-out forwards 0.7s; }
          .abt-n3 { opacity: 0; animation: abtFadeIn 0.35s ease-out forwards 1.0s; }
          .abt-n4 { opacity: 0; animation: abtFadeIn 0.35s ease-out forwards 1.3s; }
          .abt-n5 { opacity: 0; animation: abtFadeIn 0.35s ease-out forwards 1.6s; }
        `}</style>

        {/* ── BACKGROUND ── */}
        <rect width="480" height="360" fill="url(#abtBg)" />
        <rect width="480" height="360" fill="url(#abtDots)" />

        {/* Soft center glow */}
        <circle cx="240" cy="180" r="90" fill="#1D4ED8" fillOpacity="0.05" />

        {/* ── PULSING RING (behind badge) ── */}
        <circle cx="240" cy="180" stroke="#1D4ED8" strokeWidth="1.5" fill="none">
          <animate attributeName="r"              values="52;70;52" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.22;0;0.22" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* ── CONNECTION LINES ── (drawn before badge so badge overlaps) */}

        {/* → Healthcare      (top,          240,  55) */}
        <line className="abt-line" x1="240" y1="180" x2="240" y2="55"
          stroke="#1D4ED8" strokeOpacity="0.3" strokeWidth="1.5" />

        {/* → Manufacturing   (top-right,    359, 141) */}
        <line className="abt-line" x1="240" y1="180" x2="359" y2="141"
          stroke="#1D4ED8" strokeOpacity="0.3" strokeWidth="1.5"
          style={{ animationDelay: "-0.4s" }} />

        {/* → Hospitality     (bottom-right, 314, 281) */}
        <line className="abt-line" x1="240" y1="180" x2="314" y2="281"
          stroke="#1D4ED8" strokeOpacity="0.3" strokeWidth="1.5"
          style={{ animationDelay: "-0.8s" }} />

        {/* → Prof. Services  (bottom-left,  166, 281) */}
        <line className="abt-line" x1="240" y1="180" x2="166" y2="281"
          stroke="#1D4ED8" strokeOpacity="0.3" strokeWidth="1.5"
          style={{ animationDelay: "-1.2s" }} />

        {/* → Home Services   (left,          121, 141) */}
        <line className="abt-line" x1="240" y1="180" x2="121" y2="141"
          stroke="#1D4ED8" strokeOpacity="0.3" strokeWidth="1.5"
          style={{ animationDelay: "-1.6s" }} />

        {/* ── CENTRAL MC BADGE ── */}
        {/* Outer ring */}
        <circle cx="240" cy="180" r="43" fill="white" stroke="#1D4ED8" strokeOpacity="0.15" strokeWidth="1" />
        {/* Filled circle */}
        <circle cx="240" cy="180" r="38" fill="#1D4ED8" />
        {/* Subtle inner highlight */}
        <circle cx="240" cy="180" r="38" fill="white" fillOpacity="0.06" />
        {/* Brand name — two lines centered in badge */}
        <text x="240" y="173" fill="white" fontSize="11" fontWeight="700"
          textAnchor="middle" dominantBaseline="middle">Cole Web</text>
        <text x="240" y="188" fill="white" fillOpacity="0.85" fontSize="11" fontWeight="600"
          textAnchor="middle" dominantBaseline="middle">Solutions</text>

        {/* ── INDUSTRY NODES ──
             Each node: 100 × 36 rounded rect, centered on (cx, cy).
             Icon dot at (rect_x + 17, cy), text at (rect_x + 27, cy + 4).
        ── */}

        {/* Healthcare  — center (240, 55),  rect (190, 37) */}
        <g className="abt-n1">
          <rect x="190" y="37" width="100" height="36" rx="7"
            fill="white" stroke="#E2E8F0" strokeWidth="1.2" />
          <circle cx="207" cy="55" r="3.5" fill="#1D4ED8" fillOpacity="0.7" />
          <text x="217" y="59" fill="#0F172A" fontSize="9" fontWeight="600">Healthcare</text>
        </g>

        {/* Manufacturing — center (359, 141), rect (309, 123) */}
        <g className="abt-n2">
          <rect x="309" y="123" width="100" height="36" rx="7"
            fill="white" stroke="#E2E8F0" strokeWidth="1.2" />
          <circle cx="326" cy="141" r="3.5" fill="#1D4ED8" fillOpacity="0.7" />
          <text x="336" y="145" fill="#0F172A" fontSize="9" fontWeight="600">Manufacturing</text>
        </g>

        {/* Hospitality — center (314, 281), rect (264, 263) */}
        <g className="abt-n3">
          <rect x="264" y="263" width="100" height="36" rx="7"
            fill="white" stroke="#E2E8F0" strokeWidth="1.2" />
          <circle cx="281" cy="281" r="3.5" fill="#1D4ED8" fillOpacity="0.7" />
          <text x="291" y="285" fill="#0F172A" fontSize="9" fontWeight="600">Hospitality</text>
        </g>

        {/* Professional Services — center (166, 281), rect (116, 263) */}
        <g className="abt-n4">
          <rect x="116" y="263" width="100" height="36" rx="7"
            fill="white" stroke="#E2E8F0" strokeWidth="1.2" />
          <circle cx="133" cy="281" r="3.5" fill="#1D4ED8" fillOpacity="0.7" />
          <text x="143" y="285" fill="#0F172A" fontSize="9" fontWeight="600">Professional</text>
        </g>

        {/* Home Services — center (121, 141), rect (71, 123) */}
        <g className="abt-n5">
          <rect x="71" y="123" width="100" height="36" rx="7"
            fill="white" stroke="#E2E8F0" strokeWidth="1.2" />
          <circle cx="88" cy="141" r="3.5" fill="#1D4ED8" fillOpacity="0.7" />
          <text x="98" y="145" fill="#0F172A" fontSize="9" fontWeight="600">Home Services</text>
        </g>

      </svg>
    </div>
  )
}
