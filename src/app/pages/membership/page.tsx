import Heading from "@/app/components/heading";

export default function Membership() {
    const membershipDetails = [
        {
            left: "Life Membership",
            right: "Persons with Bachelor's or Master's or Doctorate Degree in Science, Engineering / allied technology or Engineering diploma holders with minimum ten years of experience and significant contributions in the field of Aerospace and Defence Related Mechanisms",
            payment: "Rs. 5,000/- (One Time Payment)"
        },
        {
            left: "Institutional Membership",
            right: "Any government organization, private organization and industry working in the field of mechanisms expressly interested in helping forward the objects of the Society. Two nominees, at a time, can participate in the activities of the Society.",
            payment: "Rs. 20,000/- (yearly Payment)"
        },
        {
            left: "Student Membership",
            right: "Student/research scholar of a recognized college/Institution/University in the fields of Science, Technology, Engineering and any other allied fields related to Mechanisms. Membership without voting right in General body & only till completion/termination of studies.",
            payment: "Rs. 1,000/- (yearly Payment)"
        }
    ];

    return (
        <section className="pt-36 p-5 flex flex-col gap-8">
            <div className="px-2 sm:px-10 flex flex-col">
                <Heading text1="Membership Details" text2="" />
            </div>
            <div className=" px-2 sm:px-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {membershipDetails.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row border border-gray-300 p-6 md:p-8 rounded-lg">
                            {/* Left column: Membership Type */}
                            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8">
                                <h3 className="font-semibold text-base md:text-lg lg:text-xl">{item.left}</h3>
                            </div>
                            {/* Right column: Details and Payment */}
                            <div className="md:w-1/2">
                                <p className="text-xs md:text-sm lg:text-base mb-2">{item.right}</p>
                                <p className="font-medium text-blue-600 text-sm md:text-base lg:text-lg">{item.payment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
