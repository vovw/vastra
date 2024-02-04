import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar/>
      <div className="flex justify-center items-center h-full left-21">
        <img src="logo.jpg" alt="Logo" className="h-64 w-64 mx-auto my-0 sm:h-48 sm:w-48"/>
      </div>
      <div className="text-centre font-roboto">
        <p className="text-6xl font-georgia flex justify-center items-center">Vastra'24</p>
      </div>
    </div>
  );
}