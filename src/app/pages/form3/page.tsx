"use client";

import Link from "next/link";

export default function Form() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-16 pt-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Final Step – Any Queries?
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="queries"
              className="block text-gray-700 font-semibold mb-2"
            >
              Put your queries here (if any)
            </label>
            <input
              type="text"
              id="queries"
              name="queries"
              placeholder="Type your query..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-between pt-6">
            <Link
              href="/pages/form2"
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            >
              Back
            </Link>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
