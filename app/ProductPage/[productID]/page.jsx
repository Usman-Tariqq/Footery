"use client"
import { items } from "../../Webpage/data";
import ItemDetail from "../../components/itemDetail";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useCart } from "../../components/cartContext";

export default function productPage({ params }) {

  const { cart, subTotal, addToCart, clearCart, removeFromCart } = useCart();

  const productID = params.productID
  // selecting singular item's id from item var and converting its value to integar
  const product = items.find(item => item.id === parseInt(productID))

  return (
    <div className="bg-gradient-to-br from-[#cfc9c9] via-[#ffed00] to-[#ff9800]">
      <div className="w-full bg-black opacity-70 text-white">
        <Navbar cart={cart} subTotal={subTotal} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} />
      </div>
      <ItemDetail
        product={product} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      />
      <div className="w-full bg-black opacity-70 text-white">
        <Footer />
      </div>
    </div>
  )
}