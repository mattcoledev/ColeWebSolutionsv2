// Server component — all animation via CSS, no interactivity needed.

export function WebDesignVisual() {
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
          <radialGradient id="wdBg" cx="45%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#EFF6FF" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </radialGradient>
          <pattern id="wdDots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="11" cy="11" r="0.9" fill="#1D4ED8" fillOpacity="0.07" />
          </pattern>
        </defs>

        <style>{`
          text { font-family: 'Plus Jakarta Sans', sans-serif; }

          @keyframes wdFadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes wdCtaBlink {
            0%, 100% { fill-opacity: 1; }
            50%       { fill-opacity: 0.72; }
          }

          /* Browser content elements build up sequentially */
          .wd-1 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 0.2s;  }
          .wd-2 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 0.45s; }
          .wd-3 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 0.7s;  }
          .wd-4 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 0.95s; }
          .wd-5 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 1.2s;  }
          .wd-6 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 1.45s; }
          .wd-7 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 1.7s;  }
          .wd-8 { opacity: 0; animation: wdFadeIn 0.3s ease-out forwards 1.95s; }

          /* CTA buttons pulse gently after everything is built */
          .wd-cta { animation: wdCtaBlink 2.5s ease-in-out infinite 2.3s; }
        `}</style>

        {/* Background */}
        <rect width="480" height="360" fill="url(#wdBg)" />
        <rect width="480" height="360" fill="url(#wdDots)" />

        {/* ── DESKTOP BROWSER ─────────────────────────────── */}

        {/* Depth shadow */}
        <rect x="18" y="18" width="296" height="262" rx="9" fill="#1D4ED8" fillOpacity="0.06" />

        {/* Browser frame */}
        <rect x="15" y="15" width="296" height="262" rx="9" fill="white" stroke="#E2E8F0" strokeWidth="1.2" />

        {/* Title bar */}
        <rect x="15" y="15" width="296" height="30" rx="9" fill="#F8FAFC" />
        <rect x="15" y="34" width="296" height="11" fill="#F8FAFC" />
        <line x1="15" y1="45" x2="311" y2="45" stroke="#E2E8F0" strokeWidth="1" />

        {/* Traffic lights */}
        <circle cx="32" cy="30" r="4.5" fill="#EF4444" fillOpacity="0.75" />
        <circle cx="47" cy="30" r="4.5" fill="#F59E0B" fillOpacity="0.75" />
        <circle cx="62" cy="30" r="4.5" fill="#22C55E" fillOpacity="0.75" />

        {/* URL bar */}
        <rect x="85" y="21" width="156" height="16" rx="3.5" fill="white" stroke="#E2E8F0" strokeWidth="0.8" />
        <text x="92" y="32" fill="#94A3B8" fontSize="6" fontFamily="monospace">clientwebsite.com</text>

        {/* ── WEBSITE CONTENT (builds up) ── */}

        {/* Navigation */}
        <g className="wd-1">
          {/* Logo */}
          <rect x="24" y="52" width="36" height="8" rx="2" fill="#1D4ED8" fillOpacity="0.5" />
          {/* Nav links */}
          <rect x="158" y="53" width="20" height="5" rx="2" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="184" y="53" width="20" height="5" rx="2" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="210" y="53" width="20" height="5" rx="2" fill="#94A3B8" fillOpacity="0.4" />
          {/* CTA nav button */}
          <rect x="252" y="49" width="48" height="14" rx="3" fill="#1D4ED8" fillOpacity="0.85" />
          <text x="276" y="59" fill="white" fontSize="6" fontWeight="600" textAnchor="middle">Contact Us</text>
        </g>
        <line x1="15" y1="68" x2="311" y2="68" stroke="#F1F5F9" strokeWidth="1" />

        {/* Hero left — eyebrow pill */}
        <g className="wd-2">
          <rect x="24" y="77" width="58" height="10" rx="5" fill="#1D4ED8" fillOpacity="0.1" />
          <text x="30" y="85" fill="#1D4ED8" fontSize="5.5" fontWeight="700">PLUMBING &amp; HVAC</text>
        </g>

        {/* Hero left — headlines */}
        <g className="wd-3">
          <rect x="24" y="92"  width="172" height="11" rx="3" fill="#0F172A" fillOpacity="0.82" />
          <rect x="24" y="107" width="140" height="11" rx="3" fill="#0F172A" fillOpacity="0.78" />
        </g>

        {/* Hero left — subtext */}
        <g className="wd-4">
          <rect x="24" y="124" width="160" height="6" rx="2" fill="#64748B" fillOpacity="0.38" />
          <rect x="24" y="134" width="145" height="6" rx="2" fill="#64748B" fillOpacity="0.28" />
          <rect x="24" y="144" width="125" height="6" rx="2" fill="#64748B" fillOpacity="0.22" />
        </g>

        {/* Hero left — CTA buttons */}
        <g className="wd-5">
          <rect x="24" y="157" width="92" height="21" rx="4" fill="#1D4ED8" className="wd-cta" />
          <text x="70" y="171" fill="white" fontSize="7" fontWeight="600" textAnchor="middle">Get a Free Quote</text>
          <rect x="123" y="157" width="65" height="21" rx="4" fill="none" stroke="#E2E8F0" strokeWidth="1" />
          <text x="155" y="171" fill="#64748B" fontSize="7" textAnchor="middle">See Our Work</text>
        </g>

        {/* Hero right — contact form card */}
        <g className="wd-3">
          <rect x="205" y="74" width="97" height="108" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="1" />
          {/* Form header */}
          <rect x="205" y="74" width="97" height="18" rx="6" fill="#1D4ED8" fillOpacity="0.07" />
          <rect x="205" y="83" width="97" height="9" fill="#1D4ED8" fillOpacity="0.07" />
          <text x="215" y="86" fill="#1D4ED8" fontSize="6.5" fontWeight="700">Get a Free Quote</text>
          {/* Name input */}
          <rect x="212" y="96" width="82" height="13" rx="2.5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
          <text x="217" y="106" fill="#CBD5E1" fontSize="5.5">Your Name</text>
          {/* Email input */}
          <rect x="212" y="113" width="82" height="13" rx="2.5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
          <text x="217" y="123" fill="#CBD5E1" fontSize="5.5">Email Address</text>
          {/* Phone input */}
          <rect x="212" y="130" width="82" height="13" rx="2.5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
          <text x="217" y="140" fill="#CBD5E1" fontSize="5.5">Phone Number</text>
          {/* Submit */}
          <rect x="212" y="148" width="82" height="16" rx="3" fill="#1D4ED8" className="wd-cta" />
          <text x="253" y="159.5" fill="white" fontSize="7" fontWeight="600" textAnchor="middle">Submit →</text>
        </g>

        {/* Divider above features */}
        <line x1="15" y1="189" x2="311" y2="189" stroke="#F1F5F9" strokeWidth="1" />

        {/* Feature cards row */}
        <g className="wd-6">
          <rect x="24" y="196" width="82" height="68" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
          <circle cx="44" cy="216" r="8" fill="#1D4ED8" fillOpacity="0.1" />
          <rect x="26" y="229" width="48" height="6" rx="2" fill="#0F172A" fillOpacity="0.5" />
          <rect x="26" y="239" width="62" height="5" rx="2" fill="#94A3B8" fillOpacity="0.3" />
          <rect x="26" y="247" width="54" height="5" rx="2" fill="#94A3B8" fillOpacity="0.2" />
        </g>
        <g className="wd-7">
          <rect x="114" y="196" width="82" height="68" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
          <circle cx="134" cy="216" r="8" fill="#1D4ED8" fillOpacity="0.1" />
          <rect x="116" y="229" width="48" height="6" rx="2" fill="#0F172A" fillOpacity="0.5" />
          <rect x="116" y="239" width="62" height="5" rx="2" fill="#94A3B8" fillOpacity="0.3" />
          <rect x="116" y="247" width="54" height="5" rx="2" fill="#94A3B8" fillOpacity="0.2" />
        </g>
        <g className="wd-8">
          <rect x="204" y="196" width="82" height="68" rx="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="0.8" />
          <circle cx="224" cy="216" r="8" fill="#1D4ED8" fillOpacity="0.1" />
          <rect x="206" y="229" width="48" height="6" rx="2" fill="#0F172A" fillOpacity="0.5" />
          <rect x="206" y="239" width="62" height="5" rx="2" fill="#94A3B8" fillOpacity="0.3" />
          <rect x="206" y="247" width="54" height="5" rx="2" fill="#94A3B8" fillOpacity="0.2" />
        </g>

        {/* ── PHONE MOCKUP ──────────────────────────────────── */}

        {/* Depth shadow */}
        <rect x="316" y="86" width="112" height="204" rx="16" fill="#1D4ED8" fillOpacity="0.07" />

        {/* Phone frame */}
        <rect x="313" y="83" width="112" height="204" rx="16" fill="white" stroke="#E2E8F0" strokeWidth="1.2" />

        {/* Screen */}
        <rect x="318" y="97" width="102" height="180" rx="10" fill="#F8FAFC" />

        {/* Dynamic island */}
        <rect x="344" y="88" width="46" height="9" rx="4.5" fill="#E2E8F0" />

        {/* Home bar */}
        <rect x="344" y="279" width="46" height="3" rx="1.5" fill="#CBD5E1" fillOpacity="0.65" />

        {/* Phone website content */}
        <g className="wd-1">
          {/* Mobile logo */}
          <rect x="324" y="104" width="26" height="7" rx="2" fill="#1D4ED8" fillOpacity="0.5" />
          {/* Hamburger */}
          <rect x="394" y="104" width="14" height="2" rx="1" fill="#94A3B8" fillOpacity="0.55" />
          <rect x="396" y="108" width="10" height="2" rx="1" fill="#94A3B8" fillOpacity="0.4"  />
          <rect x="395" y="112" width="12" height="2" rx="1" fill="#94A3B8" fillOpacity="0.48" />
          <line x1="318" y1="117" x2="420" y2="117" stroke="#E2E8F0" strokeWidth="0.7" />
        </g>

        <g className="wd-2">
          {/* Eyebrow */}
          <rect x="324" y="123" width="42" height="8" rx="4" fill="#1D4ED8" fillOpacity="0.1" />
        </g>

        <g className="wd-3">
          {/* Headlines */}
          <rect x="324" y="136" width="90" height="9" rx="2.5" fill="#0F172A" fillOpacity="0.78" />
          <rect x="324" y="149" width="72" height="9" rx="2.5" fill="#0F172A" fillOpacity="0.72" />
          {/* Subtext */}
          <rect x="324" y="163" width="88" height="5.5" rx="2" fill="#64748B" fillOpacity="0.32" />
          <rect x="324" y="172" width="70" height="5.5" rx="2" fill="#64748B" fillOpacity="0.24" />
        </g>

        <g className="wd-5">
          {/* Full-width mobile CTA */}
          <rect x="324" y="184" width="90" height="19" rx="4" fill="#1D4ED8" className="wd-cta" />
          <text x="369" y="196.5" fill="white" fontSize="7" fontWeight="600" textAnchor="middle">Get a Free Quote</text>
        </g>

        <g className="wd-7">
          {/* 2-column cards */}
          <rect x="324" y="210" width="42" height="46" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.8" />
          <circle cx="335" cy="224" r="6"  fill="#1D4ED8" fillOpacity="0.1" />
          <rect x="326" y="234" width="36" height="5" rx="2" fill="#0F172A" fillOpacity="0.42" />
          <rect x="326" y="242" width="28" height="4" rx="2" fill="#94A3B8" fillOpacity="0.26" />

          <rect x="372" y="210" width="42" height="46" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="0.8" />
          <circle cx="383" cy="224" r="6"  fill="#1D4ED8" fillOpacity="0.1" />
          <rect x="374" y="234" width="36" height="5" rx="2" fill="#0F172A" fillOpacity="0.42" />
          <rect x="374" y="242" width="28" height="4" rx="2" fill="#94A3B8" fillOpacity="0.26" />
        </g>

      </svg>
    </div>
  )
}
