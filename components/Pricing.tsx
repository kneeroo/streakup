const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with habit tracking.",
    features: [
      "Up to 3 habits",
      "Basic streak tracking",
      "Daily reminders",
      "7-day history",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious habit builders who want full insights.",
    features: [
      "Unlimited habits",
      "Advanced analytics",
      "Smart reminders (AI)",
      "Unlimited history",
      "Leaderboard access",
      "Custom themes",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$19",
    period: "/month",
    description: "Build habits together with your team or family.",
    features: [
      "Everything in Pro",
      "Up to 10 members",
      "Shared habit boards",
      "Team leaderboards",
      "Admin dashboard",
      "Priority support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Simple, <span className="text-orange-500">Transparent</span> Pricing
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Start free and upgrade as your habits grow. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? "bg-gray-800 border-2 border-orange-500 shadow-xl shadow-orange-500/10"
                  : "bg-gray-800/50 border border-gray-700/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <p className="mt-2 text-gray-400 text-sm">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-orange-500 shrink-0"
                    >
                      <path
                        d="M13.333 4L6 11.333 2.667 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tier.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
