"use client";
import Navbar from "./components/navbar";
import Banner from "./components/Banner";
import Slider from "./components/slider";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="w-screen bg-gradient-to-br from-[#cfc9c9] via-[#ffed00] to-[#ff9800] overflow-hidden">
      <div className="w-screen bg-black opacity-70 text-white">
        <Navbar />
      </div>
      <Banner />
      <div className="flex flex-wrap justify-around items-center w-full max-h-screen">
        <Slider />
      </div>
      <div className="flex justify-center items-center w-full px-2">
        <Newsletter />
      </div>
      <div className="bg-black opacity-70">
      <Footer />
      </div>
    </main>
  );
}