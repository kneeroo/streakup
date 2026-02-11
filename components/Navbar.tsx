"use client";

import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M16 2C16 2 8 10 8 18a8 8 0 0016 0c0-8-8-16-8-16z"
                fill="url(#flame-grad)"
              />
              <path
                d="M16 12c0 0-4 4-4 9a4 4 0 008 0c0-5-4-9-4-9z"
                fill="#FDE68A"
              />
              <defs>
                <linearGradient
                  id="flame-grad"
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F97316" />
                  <stop offset="1" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xl font-bold text-white">
              Streak<span className="text-orange-500">Up</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-300 hover:text-white transition-colors border-b border-gray-800 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
