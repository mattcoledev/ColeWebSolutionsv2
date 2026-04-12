export function HeroAnimation() {
  return (
    <svg
      viewBox="0 0 560 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id="heroDotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1" fill="white" fillOpacity="0.05" />
        </pattern>
        <radialGradient id="heroGlow" cx="55%" cy="46%" r="45%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes heroDashFlow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes heroPulseDot {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 1; }
        }
        @keyframes heroDrawChart {
          from { stroke-dashoffset: 400; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroWave {
          0%   { d: path("M 14 366 L 14 358 L 21 354 L 28 359 L 35 356 L 42 360"); }
          25%  { d: path("M 14 366 L 14 352 L 21 360 L 28 353 L 35 361 L 42 355"); }
          50%  { d: path("M 14 366 L 14 361 L 21 350 L 28 362 L 35 351 L 42 363"); }
          75%  { d: path("M 14 366 L 14 355 L 21 357 L 28 356 L 35 354 L 42 358"); }
          100% { d: path("M 14 366 L 14 358 L 21 354 L 28 359 L 35 356 L 42 360"); }
        }
        .hero-float-1 {
          animation: heroFloat1 5s ease-in-out infinite;
          transform-box: fill-box;
        }
        .hero-float-2 {
          animation: heroFloat2 6.5s ease-in-out infinite 2s;
          transform-box: fill-box;
        }
        .hero-dash {
          stroke-dasharray: 5 5;
          animation: heroDashFlow 1.5s linear infinite;
        }
        .hero-pulse-dot {
          animation: heroPulseDot 2.5s ease-in-out infinite;
        }
        .hero-chart-line {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: heroDrawChart 2s ease-out forwards 0.8s;
        }
        .hero-fade-1 {
          opacity: 0;
          animation: heroFadeUp 0.5s ease-out forwards 0.15s;
        }
        .hero-fade-2 {
          opacity: 0;
          animation: heroFadeUp 0.5s ease-out forwards 0.45s;
        }
        .hero-fade-3 {
          opacity: 0;
          animation: heroFadeUp 0.5s ease-out forwards 0.75s;
        }
      `}</style>

      {/* Dot grid */}
      <rect width="560" height="430" fill="url(#heroDotGrid)" />

      {/* Center glow */}
      <ellipse cx="290" cy="215" rx="250" ry="195" fill="url(#heroGlow)" />

      {/* ── BROWSER WINDOW ─────────────────────────────────── */}
      {/* Subtle drop shadow layer */}
      <rect x="109" y="65" width="305" height="260" rx="10" fill="#1D4ED8" fillOpacity="0.07" />

      {/* Frame */}
      <rect x="106" y="61" width="305" height="258" rx="10" fill="#060D1A" stroke="#1E40AF" strokeOpacity="0.55" strokeWidth="1.5" />

      {/* Title bar fill */}
      <rect x="106" y="61" width="305" height="32" rx="10" fill="#1E3A8A" fillOpacity="0.22" />
      <rect x="106" y="81" width="305" height="12" fill="#1E3A8A" fillOpacity="0.22" />

      {/* Traffic lights */}
      <circle cx="126" cy="77" r="5" fill="#EF4444" fillOpacity="0.85" />
      <circle cx="142" cy="77" r="5" fill="#F59E0B" fillOpacity="0.85" />
      <circle cx="158" cy="77" r="5" fill="#22C55E" fillOpacity="0.85" />

      {/* URL bar */}
      <rect x="178" y="69" width="168" height="16" rx="4" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="0.8" />
      <text x="186" y="80" fill="white" fillOpacity="0.28" fontSize="6.5" fontFamily="monospace">colewebsolutions.com</text>

      {/* ── SIDEBAR ──────────────────────────────────────────── */}
      <rect x="106" y="93" width="52" height="226" fill="#1E3A8A" fillOpacity="0.07" />

      {/* Brand mark */}
      <rect x="115" y="103" width="34" height="9" rx="3" fill="#3B82F6" fillOpacity="0.55" />

      {/* Nav items */}
      <rect x="115" y="120" width="34" height="7" rx="3" fill="white" fillOpacity="0.2" />
      <rect x="115" y="135" width="28" height="7" rx="3" fill="white" fillOpacity="0.1" />
      <rect x="115" y="150" width="31" height="7" rx="3" fill="white" fillOpacity="0.1" />
      <rect x="115" y="165" width="24" height="7" rx="3" fill="white" fillOpacity="0.1" />
      <rect x="115" y="180" width="30" height="7" rx="3" fill="white" fillOpacity="0.1" />
      <rect x="115" y="200" width="34" height="0.75" fill="white" fillOpacity="0.07" />
      <rect x="115" y="208" width="22" height="7" rx="3" fill="white" fillOpacity="0.08" />
      <rect x="115" y="223" width="28" height="7" rx="3" fill="white" fillOpacity="0.08" />

      {/* Sidebar avatar */}
      <circle cx="132" cy="298" r="10" fill="#1E40AF" fillOpacity="0.35" />

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}

      {/* Page header */}
      <g className="hero-fade-1">
        <text x="168" y="106" fill="white" fillOpacity="0.7" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Dashboard</text>
        <rect x="372" y="98" width="30" height="13" rx="3" fill="#1D4ED8" fillOpacity="0.65" />
        <text x="378" y="108" fill="white" fillOpacity="0.85" fontSize="6.5" fontFamily="sans-serif">Export</text>
      </g>

      {/* ── METRICS ROW ─── */}
      <g className="hero-fade-1">
        {/* Visitors */}
        <rect x="164" y="114" width="70" height="44" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.07" strokeWidth="0.8" />
        <text x="172" y="128" fill="white" fillOpacity="0.3" fontSize="6" fontFamily="sans-serif" letterSpacing="0.6">VISITORS</text>
        <text x="172" y="146" fill="white" fillOpacity="0.88" fontSize="13" fontWeight="700" fontFamily="sans-serif">12.4k</text>

        {/* Leads */}
        <rect x="242" y="114" width="70" height="44" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.07" strokeWidth="0.8" />
        <text x="250" y="128" fill="white" fillOpacity="0.3" fontSize="6" fontFamily="sans-serif" letterSpacing="0.6">LEADS</text>
        <text x="250" y="146" fill="#60A5FA" fillOpacity="0.95" fontSize="13" fontWeight="700" fontFamily="sans-serif">347</text>

        {/* Bookings */}
        <rect x="320" y="114" width="88" height="44" rx="5" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.07" strokeWidth="0.8" />
        <text x="328" y="128" fill="white" fillOpacity="0.3" fontSize="6" fontFamily="sans-serif" letterSpacing="0.6">BOOKINGS</text>
        <text x="328" y="146" fill="#4ADE80" fillOpacity="0.9" fontSize="13" fontWeight="700" fontFamily="sans-serif">89</text>
      </g>

      {/* ── CHART AREA ─── */}
      <g className="hero-fade-2">
        <rect x="164" y="166" width="244" height="88" rx="5" fill="white" fillOpacity="0.02" stroke="white" strokeOpacity="0.06" strokeWidth="0.8" />
        <text x="172" y="179" fill="white" fillOpacity="0.28" fontSize="6" fontFamily="sans-serif" letterSpacing="0.6">TRAFFIC OVERVIEW</text>

        {/* Horizontal grid */}
        <line x1="167" y1="245" x2="403" y2="245" stroke="white" strokeOpacity="0.05" strokeWidth="0.8" />
        <line x1="167" y1="228" x2="403" y2="228" stroke="white" strokeOpacity="0.05" strokeWidth="0.8" />
        <line x1="167" y1="211" x2="403" y2="211" stroke="white" strokeOpacity="0.05" strokeWidth="0.8" />
        <line x1="167" y1="194" x2="403" y2="194" stroke="white" strokeOpacity="0.05" strokeWidth="0.8" />

        {/* Chart area fill */}
        <path
          d="M 172 242 L 202 230 L 232 235 L 262 215 L 292 221 L 322 201 L 352 194 L 382 199 L 403 184 L 403 248 L 172 248 Z"
          fill="url(#heroChartFill)"
        />

        {/* Chart line */}
        <path
          className="hero-chart-line"
          d="M 172 242 L 202 230 L 232 235 L 262 215 L 292 221 L 322 201 L 352 194 L 382 199 L 403 184"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Active endpoint dot */}
        <circle cx="403" cy="184" r="4" fill="#60A5FA" className="hero-pulse-dot" />

        {/* X-axis labels */}
        <text x="172" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">Jan</text>
        <text x="200" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">Feb</text>
        <text x="228" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">Mar</text>
        <text x="256" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">Apr</text>
        <text x="284" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">May</text>
        <text x="312" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">Jun</text>
        <text x="340" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">Jul</text>
        <text x="368" y="258" fill="white" fillOpacity="0.18" fontSize="5.5" fontFamily="sans-serif">Aug</text>
      </g>

      {/* ── ACTIVITY LIST ─── */}
      <g className="hero-fade-3">
        <rect x="164" y="264" width="244" height="46" rx="5" fill="white" fillOpacity="0.02" stroke="white" strokeOpacity="0.06" strokeWidth="0.8" />

        {/* Row 1 */}
        <circle cx="177" cy="277" r="4.5" fill="#3B82F6" fillOpacity="0.4" />
        <rect x="188" y="273" width="88" height="5" rx="2.5" fill="white" fillOpacity="0.22" />
        <rect x="188" y="280" width="54" height="4" rx="2" fill="white" fillOpacity="0.1" />
        <rect x="358" y="272" width="40" height="9" rx="3" fill="#4ADE80" fillOpacity="0.18" />
        <text x="364" y="280" fill="#4ADE80" fillOpacity="0.75" fontSize="5.5" fontFamily="sans-serif">Active</text>

        {/* Divider */}
        <rect x="170" y="286" width="232" height="0.6" fill="white" fillOpacity="0.05" />

        {/* Row 2 */}
        <circle cx="177" cy="297" r="4.5" fill="#F59E0B" fillOpacity="0.4" />
        <rect x="188" y="293" width="98" height="5" rx="2.5" fill="white" fillOpacity="0.22" />
        <rect x="188" y="300" width="62" height="4" rx="2" fill="white" fillOpacity="0.1" />
        <rect x="358" y="293" width="40" height="9" rx="3" fill="#60A5FA" fillOpacity="0.18" />
        <text x="362" y="301" fill="#60A5FA" fillOpacity="0.75" fontSize="5.5" fontFamily="sans-serif">Review</text>
      </g>

      {/* ── FLOATING CARD 1 — NEW BOOKING ──────────────────── */}
      <g className="hero-float-1">
        <rect x="428" y="36" width="124" height="70" rx="8" fill="#07101F" stroke="#3B82F6" strokeOpacity="0.5" strokeWidth="1.5" />
        {/* Card header */}
        <rect x="428" y="36" width="124" height="19" rx="8" fill="#1E3A8A" fillOpacity="0.25" />
        <rect x="428" y="47" width="124" height="8" fill="#1E3A8A" fillOpacity="0.25" />
        {/* Status dot */}
        <circle cx="442" cy="45" r="3.5" fill="#4ADE80" fillOpacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="450" y="49" fill="white" fillOpacity="0.45" fontSize="6.5" fontFamily="sans-serif">Notification</text>
        {/* Body */}
        <text x="440" y="66" fill="white" fillOpacity="0.92" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">New Booking</text>
        <text x="440" y="77" fill="white" fillOpacity="0.42" fontSize="6.5" fontFamily="sans-serif">Hartwell Dentistry</text>
        <text x="440" y="98" fill="white" fillOpacity="0.22" fontSize="5.5" fontFamily="sans-serif">Just now</text>
      </g>

      {/* Connection: card 1 → browser */}
      <circle cx="411" cy="99" r="3.5" fill="#3B82F6" fillOpacity="0.7" className="hero-pulse-dot" />
      <path
        className="hero-dash"
        d="M 428 74 Q 420 86 414 99"
        stroke="#3B82F6"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        fill="none"
      />

      {/* ── FLOATING CARD 2 — AI VOICE AGENT ───────────────── */}
      <g className="hero-float-2">
        <rect x="2" y="328" width="124" height="72" rx="8" fill="#07101F" stroke="#3B82F6" strokeOpacity="0.4" strokeWidth="1.5" />
        {/* Card header */}
        <rect x="2" y="328" width="124" height="19" rx="8" fill="#1E3A8A" fillOpacity="0.22" />
        <rect x="2" y="339" width="124" height="8" fill="#1E3A8A" fillOpacity="0.22" />
        <text x="14" y="342" fill="white" fillOpacity="0.42" fontSize="6.5" fontFamily="sans-serif">AI Voice Agent</text>
        <circle cx="117" cy="337" r="3.5" fill="#4ADE80" fillOpacity="0.85">
          <animate attributeName="opacity" values="0.85;0.3;0.85" dur="2.2s" repeatCount="indefinite" />
        </circle>
        {/* Body */}
        <text x="14" y="358" fill="white" fillOpacity="0.88" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">Online · 24/7</text>

        {/* Waveform bars — bottom-anchored at y=376 */}
        <rect x="14" y="368" width="4" height="8" rx="2" fill="#60A5FA" fillOpacity="0.7">
          <animate attributeName="height" values="8;14;5;10;8" dur="1.0s" repeatCount="indefinite" />
          <animate attributeName="y" values="368;362;371;366;368" dur="1.0s" repeatCount="indefinite" />
        </rect>
        <rect x="21" y="364" width="4" height="12" rx="2" fill="#60A5FA" fillOpacity="0.55">
          <animate attributeName="height" values="12;6;16;8;12" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="364;370;360;368;364" dur="0.8s" repeatCount="indefinite" />
        </rect>
        <rect x="28" y="369" width="4" height="7" rx="2" fill="#60A5FA" fillOpacity="0.7">
          <animate attributeName="height" values="7;13;4;9;7" dur="1.3s" repeatCount="indefinite" />
          <animate attributeName="y" values="369;363;372;367;369" dur="1.3s" repeatCount="indefinite" />
        </rect>
        <rect x="35" y="366" width="4" height="10" rx="2" fill="#60A5FA" fillOpacity="0.6">
          <animate attributeName="height" values="10;5;15;7;10" dur="0.9s" repeatCount="indefinite" />
          <animate attributeName="y" values="366;371;361;369;366" dur="0.9s" repeatCount="indefinite" />
        </rect>
        <rect x="42" y="370" width="4" height="6" rx="2" fill="#60A5FA" fillOpacity="0.5">
          <animate attributeName="height" values="6;11;3;9;6" dur="1.1s" repeatCount="indefinite" />
          <animate attributeName="y" values="370;365;373;367;370" dur="1.1s" repeatCount="indefinite" />
        </rect>

        <text x="14" y="393" fill="white" fillOpacity="0.22" fontSize="5.5" fontFamily="sans-serif">0 calls missed today</text>
      </g>

      {/* Connection: card 2 → browser */}
      <circle cx="106" cy="275" r="3.5" fill="#3B82F6" fillOpacity="0.65" className="hero-pulse-dot" />
      <path
        className="hero-dash"
        d="M 118 333 Q 112 308 108 278"
        stroke="#3B82F6"
        strokeOpacity="0.38"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
