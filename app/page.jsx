"use client";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Slider from "./components/slider";
import { ContactUs } from "./components/newsletter";
import Footer from "./components/footer";
import { useCart } from "./components/cartContext";

export default function Home() {

  const { cart, subTotal, addToCart, clearCart, removeFromCart } = useCart();

  return (
    <main className="w-full bg-gradient-to-br from-[#cfc9c9] via-[#ffed00] to-[#ff9800] overflow-hidden">
      <div className="w-full relative z-50 bg-black/70 text-white">
        <Navbar cart={cart} subTotal={subTotal} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} />
      </div>
      <div className="w-full">
        <Banner />
      </div>
      <div className="flex flex-wrap justify-around items-center w-full max-h-screen">
        <Slider />
      </div>
      <div className="flex justify-center items-center w-full px-2">
        <ContactUs />
      </div>
      <div className="bg-black/70">
        <Footer />
      </div>
    </main>
  );
}
