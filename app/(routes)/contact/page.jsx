import Navbar from "@/app/components/navbar";
import Head from "next/head";
import Footer from "@/app/components/fotter";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <Navbar />
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="font-light text-gray-600">
          Get in touch with us for any inquiries or support.
        </p>
      </div>
      <div className="mx-auto max-w-md rounded-lg bg-black p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
        <p className="mb-4">Atharva Joshi</p>
        <p className="mb-4">Email: vastra2020@gmail.com</p>
        <p className="mb-4">Number: 8956955998</p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
