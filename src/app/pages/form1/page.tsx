"use client";

export default function Form() {
  const centres = [
    "Choose Centre",
    "VSSC",
    "LPSC",
    "IISU",
    "HSFC",
    "HQRS",
    "IPRC",
  ];
  const categories = [
    "Choose Category",
    "Toddlers (age up to 3 years)",
    "Kids (Play school and Kindergarten)",
    "Sub-Juniors (1 - 4 std)",
    "Juniors (5 - 8 std)",
    "Seniors (9 - 12 std)",
    "Member (SEA member / Associate member)",
    "Family Member (above 18yrs)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white pt-24 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700">
          Competitions - Aarohan 2025
        </h2>
        <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base">
          Space Engineers Association (SEA) is one of the largest Association of
          Aerospace Engineers in India. With members across various centres of
          ISRO across the country, SEA caters to the Cultural, Professional and
          Organizational requirements of scientists working in ISRO. Amidst the
          challenges of the pandemic, emerged Aarohan – the cultural fest of
          SEA, is well known for the talents of its members and their family.
          This year, we have come forward to celebrate the Golden Jubilee. Get
          ready for an exciting array of competitions for all age groups and a
          variety of live gigs. With a spectacular display of talents and
          mind-blowing performances, Aarohan-2025 is again going to rock the
          stage.
        </p>

        <img
          src="/images/aarohan-logo.svg"
          alt="Aarohan Logo"
          className="w-3/4 sm:w-2/5 mx-auto rounded-xl shadow-sm"
        />

        <form className="space-y-5 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          {[
            { label: "Full Name of participant", required: true },
            { label: "Age", required: true },
            { label: "Name of SEA Member", required: true },
            { label: "Email Address", required: true, type: "email" },
            { label: "Mobile Number", required: true },
            { label: "Alternate Mobile Number (if any)" },
            { label: "Office Phone Number" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block font-semibold text-gray-800 mb-1">
                {field.label}
              </label>
              <input
                type={field.type || "text"}
                required={field.required}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              ISRO Centre
            </label>
            <select
              required
              className="w-full border border-gray-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              {centres.map((centre, key) => (
                <option key={key} value={centre}>
                  {centre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Category
            </label>
            <select
              required
              className="w-full border border-gray-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              {categories.map((category, key) => (
                <option key={key} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end pt-6">
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
  );
}
