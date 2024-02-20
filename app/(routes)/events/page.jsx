import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/fotter";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="flex justify-center items-center h-screen">
      <img src="/gallery/Coming Soon.gif" alt="Coming Soon Image" />
    </div>
      <Footer/>
    </div>
  );
}
