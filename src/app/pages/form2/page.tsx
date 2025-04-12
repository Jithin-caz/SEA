"use client";

import Link from "next/link";

export default function Form2() {
  const competitions = [
    "Fancy Kids (Fancy Dress)",
    "Rhymes of the Times (Nursery Rhymes)",
    "Lensed (Photography)",
    "Reel Out (Short video)",
  ];
  const languages = ["Choose Language", "Malayalam", "Hindi", "English"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10 px-4 pt-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
          <h2 className="text-3xl font-extrabold text-indigo-700">
            Select Competitions
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Choose the competitions you’d like to participate in. For online
            competitions, upload your entries in the required format.
          </p>

          <div className="text-sm text-gray-600 border border-gray-200 rounded-md p-4 bg-gray-50">
            <p className="font-semibold text-gray-800 mb-1">Kids:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Fancy Kids (Fancy Dress) - Online</li>
              <li>Rhymes of the Times (Nursery Rhymes) - Online</li>
              <li>Lensed (Photography) - Online</li>
              <li>Reel Out (Short video) - Online</li>
            </ul>
            <p className="font-semibold text-gray-800 mt-4">
              Other categories:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Lensed (Photography) - Online</li>
              <li>Reel Out (Short video) - Online</li>
            </ul>
            <p className="mt-2 text-red-600 font-medium">
              ⚠️ Note: Select only from the competitions that are available in
              your category.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block font-semibold text-gray-800 mb-2">
                Select the competitions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitions.map((competition, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition rounded-md p-2 border border-gray-200"
                  >
                    <input
                      type="checkbox"
                      name="competitions"
                      value={competition}
                      className="accent-indigo-600 w-4 h-4"
                    />
                    <span className="text-gray-700 text-sm">{competition}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fancy Dress Upload */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Fancy Kids (Fancy Dress) - Upload Entry
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2 bg-white"
              />
            </div>

            {/* Nursery Rhymes Language & Upload */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Rhymes - Language
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  {languages.map((language, idx) => (
                    <option key={idx} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Rhymes - Upload Entry
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
              </div>
            </div>

            {/* Lensed & Reel Out Uploads */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Lensed (Photography) - Upload Entry
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Reel Out (Short video) - Upload Entry
                </label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                />
              </div>
            </div>

            {/* Group Competitions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Vocal Harmony - No. of participants
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Vocal Harmony - Team Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Dance Synergy - No. of participants
                </label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-800 mb-1">
                  Dance Synergy - Team Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Link
                href="/pages/form1"
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
              >
                Back
              </Link>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow transition"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
