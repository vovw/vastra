import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/fotter";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <img src="poster.jpeg" alt="poster" />
      </div>
      <div className="flex justify-center">
        <img
          src="/gallery/Coming Soon.gif"
          alt="Coming Soon Image"
          className="w-1/2"
        />
      </div>
      <Footer />
    </div>
  );
}
