'use client';
import React from 'react'
import Navbar from './nabbar/navbar';
import {InlineWidget} from "react-calendly"

const BookPage = () => {

    return (
        <div className="w-full h-screen md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
            <Navbar
                scrollToWebsiteDesign={() => { }}
                scrollToGraphicDesign={() => { }}
                scrollToshopifyStoresDesign={() => { }}
                scrollToBrandsDesing={() => { }}
            />
           
            <div className="text-4xl pb-5 md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-orange-50 to-neutral-400 bg-opacity-50">
                Book a meeting
            </div>
            <InlineWidget url="https://calendly.com/shohidul/30min"/>

          
        </div>
    )
}

export default BookPage
