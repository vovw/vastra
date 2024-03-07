import Navbar from "@/app/components/navbar";
import Card from "@/app/components/cards";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-white">About Vastra ✨</h2>
        <div className="flex flex-col gap-6">
          <Card
            imageSource="/public/vjtibg.jpeg"
            title="Veermata Jijabai Technological institute"
            description="The Institute was founded in 1887 and commenced with two departments, the Ripon Textile School and the Sir J.J.School of Mechanical Engineering. The Veermata Jijabai Technological Institute was given its present title on January 26,1997. Founded in 1887, it was then known as Victoria Jubilee Technical Institute. The Institute is reputed for excellent training in courses in engineering and technology at diploma, degree and post-graduate levels of overthree thousand students. Over twenty seven courses are offered at the under-graduate, postgraduate, diploma, post-graduate diploma."
          />
          <Card
            imageSource="/public/textiledep.jpeg"
            title="Textile Department"
            description="Established in 1887,  the Textile Department at Veermata Jijabai Technological Institute (VJTI) is renowned for its excellence in textile education and research. With a rich legacy spanning over 137 years, the department has been at the forefront of shaping future leaders and innovators in the textile industry. We offer comprehensive undergraduate and postgraduate programs in Textile Technology, designed to equip students with a deep understanding of textile engineering principles, manufacturing processes, and management strategies. Our curriculum integrates theoretical knowledge with hands-on practical experience, ensuring our graduates are well-prepared to meet the challenges of the dynamic textile sector. Our department boasts state-of-the-art laboratories equipped with the latest machinery and technology, providing students with opportunities to gain practical insights into textile production, quality control, and research."
          />
          <Card
            imageSource="/puclic/vastrabg.jpeg"
            title="Vastra"
            description="Initiated in 2003, VASTRA has gained overwhelming response and has now bloomed into one of the most important Textile festivals of our country. It has a footfall of over 15,000 students and industry officials from all over the country. It facilitates a platform to students who have excelled in the Textile sector and also a wide exposure to everyone visiting the fest. The objectives of VASTRA and its events are to provide a platform for the students to showcase their talent, creativity, innovative skills and to form a strong bond between the institute and various phases of Textile Industry"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
