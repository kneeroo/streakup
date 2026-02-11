export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.15)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Now in public beta
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Build Habits That
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Actually Stick
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
            Gamified streak tracking that turns your daily routines into
            unbreakable chains. Stay motivated with streaks, leaderboards, and
            smart reminders.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-lg transition-colors shadow-lg shadow-orange-500/25"
            >
              Start Free Trial
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg text-lg transition-colors"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <CheckIcon /> No credit card required
            </span>
            <span className="flex items-center gap-1">
              <CheckIcon /> Free forever plan
            </span>
          </div>
        </div>

        {/* Flame illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl bg-orange-500/20 rounded-full animate-glow" />

            <svg
              width="280"
              height="360"
              viewBox="0 0 280 360"
              fill="none"
              className="relative animate-flame drop-shadow-2xl"
            >
              {/* Outer flame */}
              <path
                d="M140 10C140 10 40 120 40 220c0 55.228 44.772 100 100 100s100-44.772 100-100C240 120 140 10 140 10z"
                fill="url(#hero-flame-outer)"
              />
              {/* Mid flame */}
              <path
                d="M140 80C140 80 80 155 80 220c0 33.137 26.863 60 60 60s60-26.863 60-60c0-65-60-140-60-140z"
                fill="url(#hero-flame-mid)"
              />
              {/* Inner flame */}
              <path
                d="M140 150C140 150 110 190 110 220c0 16.569 13.431 30 30 30s30-13.431 30-30c0-30-30-70-30-70z"
                fill="#FDE68A"
              />
              {/* Streak number */}
              <text
                x="140"
                y="235"
                textAnchor="middle"
                fill="#92400E"
                fontSize="28"
                fontWeight="800"
              >
                42
              </text>
              <text
                x="140"
                y="255"
                textAnchor="middle"
                fill="#92400E"
                fontSize="11"
                fontWeight="600"
              >
                DAY STREAK
              </text>

              <defs>
                <linearGradient
                  id="hero-flame-outer"
                  x1="140"
                  y1="10"
                  x2="140"
                  y2="320"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F97316" />
                  <stop offset="1" stopColor="#C2410C" />
                </linearGradient>
                <linearGradient
                  id="hero-flame-mid"
                  x1="140"
                  y1="80"
                  x2="140"
                  y2="280"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FBBF24" />
                  <stop offset="1" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-orange-500"
    >
      <path
        d="M13.333 4L6 11.333 2.667 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
