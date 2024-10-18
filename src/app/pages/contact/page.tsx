"use client"
import { useState } from 'react';
import Heading from '@/app/components/heading';
import { ContactFacebookIcon, EmailIcon, LinkedInIcon } from '@/app/components/svgImages';

const ContactPage: React.FC = () => {

       const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission, e.g., sending the data to an API or server
      console.log(formData);
    };

  return (
        <section className="pt-36 p-5 flex flex-col gap-8">
            <div className="px-2 sm:px-10 flex flex-col">
                <Heading text1="Membership Details" text2="" />
            </div>
        <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif]">
          <div>
            <h1 className="text-gray-800 text-3xl font-extrabold">Let&apos;s Talk</h1>
            <p className="text-sm text-gray-500 mt-4">
              Have some big idea or brand to develop and need help? Then reach out we&apos;d love to hear about your project and provide help.
            </p>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <EmailIcon /> {/* Using the Email icon */}
                  </div>
                  <a href="" className="text-[#007bff] text-sm ml-4">
                    <small className="block">Mail</small>
                    <strong>info@example.com</strong>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Social</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <ContactFacebookIcon /> {/* Using the Facebook icon */}
                  </div>
                  <a href="/" className="text-[#007bff] text-sm ml-4">
                    Facebook
                  </a>
                </li>
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <LinkedInIcon /> {/* Using the LinkedIn icon */}
                  </div>
                  <a href="/" className="text-[#007bff] text-sm ml-4">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form className="ml-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
          />
          <button
            type="submit"
            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
        </div>
    </section>
  );
};

export default ContactPage;
