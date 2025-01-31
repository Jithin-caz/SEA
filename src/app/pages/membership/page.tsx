import Heading from "@/app/components/heading";

export default function Membership() {
    const membershipDetails = [
        {
            left: "Eligibiliy to become Member",
            right: "The membership shall be granted by the association on application and payment of prescribed fee (INR 50/- per month).  Normally the membership shall not be refused unless the working committee, by specific reasons, decides to reject the application. All employees of ISRO with a degree in Engineering/Technology or equivalent of it as defined by UPSC/Government of India.",
            payment: "Rs. 50/- per month"
        },
        {
            left: "Honorary Membership",
            right: "Persons of eminence may be invited to Honorary members either for life or for a definite period. Such Honorary members shall be nominated by the Working Committee of the Association.",
            payment: ""
        },
    ];

    return (
        <section className="pt-36 p-5 flex flex-col gap-8">
            <div className="px-2 sm:px-10 flex flex-col">
                <Heading text1="Membership" text2="Details" />
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
                <div className="flex flex-col md:flex-row border border-gray-300 p-6 md:p-8 rounded-lg mt-4">
                    <h3 className=" w-1/5 font-semibold text-base md:text-lg lg:text-xl">Termination</h3>
                    <ul className=" w-4/5 text-xs md:text-sm lg:text-base mb-2 list-disc">
                        <li>If he resigns from the service at ISRO.</li>
                        <li>If he  resigns from the membership in writing except the treasurer who has to submit the audited account to the Working Committee before he may be relieved from his membership.</li>
                        <li>If he fails to pay the arrears of subscription within two weeks after being called  upon by the committee to do so.</li>
                        <li>If recommended by the working committee and the  recommendations ratified in the general body meeting attended by at least half of the members on the roll with a simple majority of those present, voting in favour of the same (such an item must appear on the agenda of the meeting).</li>
                        <li>Any member who has ceased to be a member can be readmitted by paying fee and such other charges as the Working Committee may decide.</li>
                    </ul>
                </div>
            </div>
            <div className=" w-full flex flex-row items-center justify-center gap-3">
                <button className="bg-blue-500 p-3 rounded text-white"><a className=" w-full h-full" href="/Form/SEA membership form updated 2020.pdf">Membership Form</a></button>
                <button className="bg-blue-500 p-3 rounded text-white"><a className=" w-full h-full" href="/Form/Form - 50Rs - Subscription.pdf">Subscription Form</a></button>
            </div>
        </section>
    );
}
