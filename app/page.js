import Navbar from "./components/navbar";
import Footer from "./components/fotter";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="" style={{ backgroundImage: "url('VJTI.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <Navbar />
        <div className="landing h-screen w-screen text-centre justify-centre items-centre " >
          <div className="flex justify-center"> {/* Centering the image */}
            <img src="logo.png" alt="Logo" className="h-64 w-64 sm:h-48 sm:w-48 hover-grow" />
          </div>
          <div style={{ color: "white" }}>
            <p className="text-6xl font-serif flex justify-center">Vastra'24</p> 
          <div className="flex justify-center">
            <p className="text-2xl font-light" style={{ color: "white" }}>Elevate Fashion with Technology</p>
          </div>
          <br/>
          <br/>
          <br/>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wgdNa0aKv5k?si=8J8jDvO-rTX3q6QH&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center" style={{ backgroundImage: "url('noise-light.png')", display: "flex" }}>
          <br/>
          <br/>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex flex-row justify-center">
          <img src="vjti_gate.png" className="rounded-full h-80 key-hig-img object-cover object-center" />
        </div>
        <div className="text-white md:w-1/2 p-4">
          <p className="bg-red text-4xl">VJTI</p>
          <p className="text-2l">The Institute was founded in 1887 and commenced with two departments, the Ripon Textile School and the Sir J.J.School of Mechanical Engineering. The Veermata Jijabai Technological Institute was given its present title on January 26,1997. Founded in 1887, it was then known as Victoria Jubilee Technical Institute. The Institute is reputed for excellent training in courses in engineering and technology at diploma, degree and post-graduate levels of overthree thousand students. Over twenty seven courses are offered at the under-graduate, postgraduate, diploma, post-graduate diploma.</p>
        </div>
      </div>
      <br/>
      <br/>
      <div className="flex flex-col md:flex-row justify-between items-center" style={{ backgroundImage: "url('noise-light.png')", display: "flex" }}>
        <div className="text-white md:w-1/2 p-4">
        <p className="bg-red text-4xl">Textile Department</p>
        <p className="text-2l flex justify-centre">Established in 1887,  the Textile Department at Veermata Jijabai Technological Institute (VJTI) is renowned for its excellence in textile education and research. With a rich legacy spanning over 137 years, the department has been at the forefront of shaping future leaders and innovators in the textile industry. We offer comprehensive undergraduate and postgraduate programs in Textile Technology, designed to equip students with a deep understanding of textile engineering principles, manufacturing processes, and management strategies. Our curriculum integrates theoretical knowledge with hands on practical experience, ensuring our graduates are well-prepared to meet the challenges of the dynamic textile sector. Our department boasts state of the art laboratories equipped with the latest machinery and technology, providing students with opportunities to gain practical insights into textile production, quality control, and research. From fiber analysis to fabric testing, our facilities offer a conducive environment for experimentation and innovation. Our faculty members are actively engaged in cutting-edge research across various domains of textile engineering and technology. From sustainable textile production to advanced textile materials, our research endeavors aim to address pressing challenges and drive innovation in the field. At VJTI Textile Department, we are committed to nurturing the next generation of textile leaders and innovators. Join us in our journey to explore, innovate, and transform the world of textiles. Explore our programs, connect with our faculty, and embark on a rewarding educational experience that will shape your future in the dynamic textile industry.</p>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden flex flex-row justify-center">
             <img src="textile.jpg" className="h-80 key-hig-img object-cover object-center" style={{ borderRadius: "50%" }}  />
        </div>
      </div >
      <br/>
      <br/>
      <div className="flex flex-col md:flex-row justify-between items-center" style={{ backgroundImage: "url('noise-light.png')", display: "flex" }}>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 overflow-hidden flex flex-row justify-center">
          <img src="https://cdn.discordapp.com/attachments/1181588462021902376/1206872476374798386/image.png?ex=65dd9694&is=65cb2194&hm=ab27c2a8fb5b1e4d9215de056a8ad22fd9c101cfb8c40e3a64e8ca2211c1b768&" className="h-80 key-hig-img object-cover object-center" style={{ borderRadius: "50%" }}  />
        </div>
        <div className="text-white md:w-1/2 p-4">
        <p className="bg-red text-4xl">Vastra</p>
        <p className="text-2l flex justify-centre">Initiated in 2003, VASTRA has gained overwhelming response and has now bloomed into one of the most important Textile festivals of our country. It has a footfall of over 15,000 students and industry officials from all over the country. It facilitates a platform to students who have excelled in the Textile sector and also a wide exposure to everyone visiting the fest. The objectives of VASTRA and its events are to provide a platform for the students to showcase their talent, creativity, innovative skills and to form a strong bond between the institute and various phases of Textile Industry.</p>
        </div>
      </div >
          <Footer/>
      </div>
  );
}
