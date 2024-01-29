"use client"
import React from 'react'
import { useCart } from '../components/cartContext'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const checkout = () => {

    const { cart, subTotal, addToCart, clearCart, removeFromCart } = useCart();

    return (
        <div className="bg-gradient-to-br from-[#b4a7a7c5] via-[#bdb1099c] to-[#ff9800] min-h-screen">
            <div className="bg-black/70">
                <Navbar cart={cart} subTotal={subTotal} addToCart={addToCart} clearCart={clearCart} removeFromCart={removeFromCart} />
            </div>
            <div className='container px-2 sm:m-auto'>
                <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
                <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className='mb-4'>
                            <label htmlFor="name" className='leading-7 text-sm text-gray-600'>Name</label>
                            <input type="text" id='name' name='name' className='w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className='mb-4'>
                            <label htmlFor="email" className='leading-7 text-sm text-gray-600'>Email</label>
                            <input type="email" id='email' name='email' className='w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                    </div>
                </div>
                <div className="px-2 w-full">
                    <div className='mb-4'>
                        <label htmlFor="address" className='leading-7 text-sm text-gray-600'>Address</label>
                        <textarea name="address" id="address" cols="30" rows="2" className='w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'></textarea>
                    </div>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className='mb-4'>
                            <label htmlFor="phone" className='leading-7 text-sm text-gray-600'>Phone</label>
                            <input type="phone" id='phone' name='phone' className='w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className='mb-4'>
                            <label htmlFor="city" className='leading-7 text-sm text-gray-600'>City</label>
                            <input type="text" id='city' name='city' className='w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex my-2">
                    <div className="px-2 w-1/2">
                        <div className='mb-4'>
                            <label htmlFor="state" className='leading-7 text-sm text-gray-600'>State</label>
                            <input type="text" id='state' name='state' className='w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <div className='mb-4'>
                            <label htmlFor="pincode" className='leading-7 text-sm text-gray-600'>Pincode</label>
                            <input type="text" id='pincode' name='pincode' className='w-full bg-white rounded border border-gray-300 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                        </div>
                    </div>
                </div>
                <h2 className='font-semibold text-xl'>2. Review Cart Items & Pay</h2>
                <div className="bg-yellow-500 p-6 m-2">
                    <ol>
                        {Object.keys(cart).length == 0 && <div className="my-4 font-semibold">Your cart is Empty!</div>}
                        {Object.keys(cart).map((k) => {
                            return <li key={k}>
                                <div className="flex my-5">
                                    <div className="font-semibold">{cart[k].name}</div>
                                    <div className="flex justify-center items-center w-1/3 font-semibold text-lg"><AiFillMinusCircle onClick={() => { removeFromCart([k], 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="text-black cursor-pointer text-sm" />
                                        <span className="mx-2">{cart[k].quantity}</span>
                                        <AiFillPlusCircle onClick={() => { addToCart([k], 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className="text-black cursor-pointer text-sm" />
                                    </div>
                                </div>
                            </li>
                        })}
                    </ol>
                    <span className='font-bold'>Subtotal: {subTotal}</span>
                </div>
                <div className="mx-4">
                    <button className="flex mr-2 text-white bg-orange-500 border-0 py-2 px-2 focus:outline-none hover:bg-orange-600 rounded text-sm"><BsFillBagCheckFill className="m-1" /> Pay ${subTotal}</button>
                </div>
            </div>
            <div className="bg-black/70 mt-10">
                <Footer />
            </div>
        </div>

    )
}

export default checkout