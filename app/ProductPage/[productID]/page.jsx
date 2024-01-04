"use client"
import { items } from "@/app/Webpage/data";
import ItemDetail from "@/app/components/itemDetail";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function productPage({ params }) {
    const productID = params.productID
    const product = items.find(item => item.id === parseInt(productID))

    return (
        <div className="bg-gradient-to-br from-[#cfc9c9] via-[#ffed00] to-[#ff9800]">
            <div className="w-full bg-black opacity-70 text-white">
                <Navbar />
            </div>
            <ItemDetail
                product={product}
            />
            <div className="w-full bg-black opacity-70 text-white">
            <Footer />
            </div>
        </div>
    )
}