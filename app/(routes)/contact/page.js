import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/fotter";

const ContactPage = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="min-h-screen flex-col items-center justify-center bg-gray-900">
        <div className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Contact Us
          </h2>
          <div className="rounded-lg bg-white p-6 text-center">
            <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
            <p className="mb-2 text-gray-700" >
              <span className="font-bold">
                Subodh Mhanmunkar (General Secretary):
              </span>{" "}
              <a
                href="tel:+919326861879"
                className="text-blue-500 hover:underline focus:underline"
              >
                +91 93268 61879
              </a>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">Swaraj Pawar (Joint Secretary):</span>{" "}
              <a
                href="tel:+918655737747"
                className="text-blue-500 hover:underline focus:underline"
              >
                +91 86557 37747
              </a>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">
                Dr. Arvind Bhongade (Faculty Co-ordinator):
              </span>{" "}
              <a
                href="tel:+919702377290"
                className="text-blue-500 hover:underline focus:underline"
              >
                +91 97023 77290
              </a>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">
                Dr. Deepa Rajsinghania (Diploma Faculty Co-ordinator):
              </span>{" "}
              <a
                href="tel:+919820560567"
                className="text-blue-500 hover:underline focus:underline"
              >
                +91 98205 60567
              </a>
            </p>
            <p className="mb-2 text-gray-700">
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:vastra2020@gmail.com"
                className="text-blue-500 hover:underline focus:underline"
              >
                vastra2020@gmail.com
              </a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
