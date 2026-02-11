"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What happens if I break my streak?",
    answer:
      "Life happens! StreakUp gives you one free \"streak freeze\" per week on the Free plan (unlimited on Pro). You can also set rest days for specific habits so your streak stays intact.",
  },
  {
    question: "Can I track habits with friends?",
    answer:
      "Absolutely! With the Team plan, you can create shared habit boards and see each other's progress. Even on Pro, you can join the public leaderboard to compete with the community.",
  },
  {
    question: "Is my data private?",
    answer:
      "100%. Your habit data is encrypted at rest and in transit. We never sell your data to third parties. You can export or delete all your data at any time from your account settings.",
  },
  {
    question: "What platforms do you support?",
    answer:
      "StreakUp works on iOS, Android, and the web. Your data syncs seamlessly across all devices so you can check in wherever you are.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, no questions asked. Cancel anytime from your account settings. You'll keep access to Pro features until the end of your billing period. Your data is never deleted unless you ask us to.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Start a 14-day free trial of Pro — no credit card required. At the end of the trial, you'll be moved to the Free plan automatically unless you choose to upgrade.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-gray-700/50 bg-gray-800/50 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
