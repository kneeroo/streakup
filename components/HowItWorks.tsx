const steps = [
  {
    step: "01",
    title: "Pick Your Habits",
    description:
      "Choose from templates or create custom habits. Set your daily goals, frequency, and reminders.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-orange-500"
      >
        <rect
          x="8"
          y="8"
          width="24"
          height="24"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 20l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Build Your Streaks",
    description:
      "Complete habits daily and watch your streak flame grow. The longer your streak, the bigger the reward.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-orange-500"
      >
        <path
          d="M20 4C20 4 10 14 10 24a10 10 0 0020 0c0-10-10-20-10-20z"
          fill="currentColor"
        />
        <path
          d="M20 16c0 0-5 5-5 11a5 5 0 0010 0c0-6-5-11-5-11z"
          fill="#FDE68A"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "See Your Progress",
    description:
      "Track trends, celebrate milestones, and compete on leaderboards. Your data tells the story of your growth.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="text-orange-500"
      >
        <path
          d="M6 30L14 22L20 26L34 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 10H34V18"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How <span className="text-orange-500">StreakUp</span> Works
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps to transform your daily routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-orange-500/50 via-orange-500 to-orange-500/50" />

          {steps.map((item) => (
            <div key={item.step} className="relative text-center">
              {/* Step circle */}
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 border-2 border-orange-500 flex items-center justify-center relative z-10">
                {item.icon}
              </div>

              <div className="mt-2 text-xs font-bold text-orange-500 tracking-widest uppercase">
                Step {item.step}
              </div>

              <h3 className="mt-3 text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
