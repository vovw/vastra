import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="flex justify-center items-center h-screen">
      <img src="/gallery/Coming Soon.gif" alt="Coming Soon Image" />
    </div>
    </div>
  );
}
