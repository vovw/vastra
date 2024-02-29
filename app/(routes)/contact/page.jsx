import Navbar from "@/app/components/navbar";
import Head from 'next/head';
import Footer from "@/app/components/fotter";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto py-8">
      <Navbar/>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 font-light">Get in touch with us for any inquiries or support.</p>
      </div>
      <div className="max-w-md mx-auto bg-black p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-4">Atharva Joshi</p>
        <p className="mb-4">Email: vastra2020@gmail.com</p>
        <p className="mb-4">Number: 8956955998</p>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUsPage;
