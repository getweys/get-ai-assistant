"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-secondary flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="animate-fade-in w-full max-w-md space-y-8 text-center">
        <div className="space-y-6">
          {/* 404 Number */}
          <div className="animate-slide-up relative">
            <h1 className="flex items-center justify-center gap-12 text-9xl font-bold select-none">
              <span className="animate-bounce-in text-black dark:text-white">
                4
              </span>
              <span className="animate-bounce-in animation-delay-200 text-gray">
                0
              </span>
              <span className="animate-bounce-in animation-delay-400 text-black dark:text-white">
                4
              </span>
            </h1>
          </div>

          {/* Error Message */}
          <div className="animate-slide-up animation-delay-300 space-y-2">
            <h2 className="text-text-black text-2xl font-semibold">
              Page Not Found
            </h2>
            <p className="text-gray-dark text-sm leading-relaxed">
              Sorry, we couldn't find the page you're looking for. The page
              might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Button */}
          <div className="animate-slide-up animation-delay-500 pt-4">
            <Link
              href="/"
              className="dark:bg-primary bg-black hover:bg-black dark:text-black focus:ring-primary focus:ring-offset-secondary inline-flex transform items-center rounded-lg px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
