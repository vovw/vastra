import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <div className="flex justify-start items-center h-full">
        <img src="logo.jpg" alt="Logo" className="h-64 w-64 mx-auto my-0 sm:h-48 sm:w-48"/>
      </div>
      <div className="text-centre font-roboto">
        <p className="text-6xl font-georgia flex justify-center ">Vastra'24</p>
      </div>
    </div>
  );
}