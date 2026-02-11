const features = [
  {
    title: "Streak Tracking",
    description:
      "Watch your streak grow day by day. Visual flame counters keep you motivated to never break the chain.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-orange-500"
      >
        <path
          d="M16 2C16 2 8 10 8 18a8 8 0 0016 0c0-8-8-16-8-16z"
          fill="currentColor"
        />
        <path
          d="M16 12c0 0-4 4-4 9a4 4 0 008 0c0-5-4-9-4-9z"
          fill="#FDE68A"
        />
      </svg>
    ),
  },
  {
    title: "Smart Reminders",
    description:
      "AI-powered nudges at the perfect time. Never miss a habit again with adaptive scheduling.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-orange-500"
      >
        <path
          d="M16 4a8 8 0 00-8 8c0 3.5-2 6-2 6h20s-2-2.5-2-6a8 8 0 00-8-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M13 26a3 3 0 006 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Habit Analytics",
    description:
      "Deep insights into your patterns. See your best days, completion rates, and trends over time.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-orange-500"
      >
        <rect
          x="4"
          y="18"
          width="5"
          height="10"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="13"
          y="12"
          width="5"
          height="16"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="22"
          y="6"
          width="5"
          height="22"
          rx="1"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Leaderboards",
    description:
      "Compete with friends and the community. Social accountability keeps everyone on track.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="text-orange-500"
      >
        <path
          d="M16 4l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Everything You Need to{" "}
            <span className="text-orange-500">Stay Consistent</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Powerful features designed to turn motivation into momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-orange-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
