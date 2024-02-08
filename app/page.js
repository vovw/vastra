import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="">
      <div className="text-centre" style={{ backgroundImage: "url('VJTI.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <Navbar/>
        <div className="flex justify-start items-center h-full">
          <img src="logo.png" alt="Logo" className="h-64 w-64 mx-auto my-0 sm:h-48 sm:w-48 hover-grow"/>
        </div>
          <p className="text-6xl font-averia flex justify-center">Vastra'24</p>
          <p className="text-2xl flex justify-center font-light">Elevate Fashion with Technology</p>
        </div>
      <div className="flex flex-col md:flex-row justify-between items-center" style={{ backgroundImage: "url('noise-light.png')", display: "flex" }}>
          <div className="flex justify-center items-center">
            <img src="vjti_gate.png" className="rounded-full h-64  pl-20"/>
          </div>
          <div className="text-white md:w-1/2 p-4">
            <p className="bg-red text-4xl">VJTI</p>
            <p className="text-2l">The Institute was founded in 1887 and commenced with two departments, the Ripon Textile School and the Sir J.J.School of Mechanical Engineering. The Veermata Jijabai Technological Institute was given its present title on January 26,1997. Founded in 1887, it was then known as Victoria Jubilee Technical Institute. The Institute is reputed for excellent training in courses in engineering and technology at diploma, degree and post-graduate levels of overthree thousand students. Over twenty seven courses are offered at the under-graduate, postgraduate, diploma, post-graduate diploma. A fulltime Ph.D.programme has been started in 2006-2007.</p>
          </div>
      </div>
      <div>
          <p className="text-4xl font-averia flex justify-center">Vastra</p>
          <p className="text-2l flex justify-centre">Initiated in 2003, VASTRA has gained overwhelming response and has now bloomed into one of the most important Textile festivals of our country. It has a footfall of over 5,000 students and industry officials from all over the country. It facilitates a platform to students who have excelled in the Textile sector and also a wide exposure to everyone visiting the fest. The objectives of VASTRA and its events are to provide a platform for the students to showcase their talent, creativity, innovative skills and to form a strong bond between the institute and various phases of Textile Industry.</p>
      </div>
    </div>
  );
}