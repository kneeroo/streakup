"use client";

import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const habits = [
  {
    name: "Morning Run",
    emoji: "\u{1F3C3}",
    streak: 12,
    week: [true, true, true, true, true, false, true],
  },
  {
    name: "Read 30 min",
    emoji: "\u{1F4DA}",
    streak: 28,
    week: [true, true, true, true, true, true, true],
  },
  {
    name: "Meditate",
    emoji: "\u{1F9D8}",
    streak: 5,
    week: [false, false, true, true, true, true, true],
  },
  {
    name: "No Sugar",
    emoji: "\u{1F34E}",
    streak: 42,
    week: [true, true, true, true, true, true, true],
  },
];

export default function StreakDemo() {
  const [activeHabit, setActiveHabit] = useState(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Your Week at a <span className="text-orange-500">Glance</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            A beautiful streak grid to keep you accountable — every single day.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-800/60 border border-gray-700/50 overflow-hidden">
          {/* Habit tabs */}
          <div className="flex overflow-x-auto border-b border-gray-700/50">
            {habits.map((habit, i) => (
              <button
                key={habit.name}
                onClick={() => setActiveHabit(i)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeHabit === i
                    ? "text-orange-400 border-b-2 border-orange-500 bg-orange-500/5"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span>{habit.emoji}</span>
                {habit.name}
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            {/* Streak counter */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-lg">
                  {habits[activeHabit].emoji}
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {habits[activeHabit].name}
                  </p>
                  <p className="text-gray-500 text-sm">This week</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M16 2C16 2 8 10 8 18a8 8 0 0016 0c0-8-8-16-8-16z"
                    fill="#F97316"
                  />
                  <path
                    d="M16 12c0 0-4 4-4 9a4 4 0 008 0c0-5-4-9-4-9z"
                    fill="#FDE68A"
                  />
                </svg>
                <span className="text-2xl font-bold text-orange-400">
                  {habits[activeHabit].streak}
                </span>
                <span className="text-gray-500 text-sm">days</span>
              </div>
            </div>

            {/* Weekly grid */}
            <div className="grid grid-cols-7 gap-2 sm:gap-3">
              {days.map((day, i) => {
                const completed = habits[activeHabit].week[i];
                return (
                  <div key={day} className="text-center">
                    <p className="text-xs text-gray-500 mb-2">{day}</p>
                    <div
                      className={`aspect-square rounded-xl flex items-center justify-center text-lg transition-all ${
                        completed
                          ? "bg-orange-500/20 border-2 border-orange-500 shadow-lg shadow-orange-500/10"
                          : "bg-gray-700/50 border-2 border-gray-600/50"
                      }`}
                    >
                      {completed ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M16 4C16 4 8 12 8 20a8 8 0 0016 0c0-8-8-16-8-16z"
                            fill="#F97316"
                          />
                          <path
                            d="M16 14c0 0-4 3-4 7a4 4 0 008 0c0-4-4-7-4-7z"
                            fill="#FDE68A"
                          />
                        </svg>
                      ) : (
                        <div className="w-3 h-3 rounded-full bg-gray-600" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Completion bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Weekly progress</span>
                <span className="text-sm font-medium text-orange-400">
                  {habits[activeHabit].week.filter(Boolean).length}/7 days
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-500"
                  style={{
                    width: `${(habits[activeHabit].week.filter(Boolean).length / 7) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
