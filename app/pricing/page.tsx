'use client';
import React from 'react'
import Navbar from './_componects/nabbar/navbar';
import { Plans } from './_componects/data';
import { PiCheckCircleFill } from 'react-icons/pi';
import Link from 'next/link';

const PricingPage = () => {

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => { }}
        scrollToGraphicDesign={() => { }}
        scrollToshopifyStoresDesign={() => { }}
        scrollToBrandsDesing={() => { }}
      />
       
      <div className='flex items-center flex-col'>
        <div className='text-4xl py-10 md:text-7xl px-5 text-center bg-gradient-to-b bg-clip-text text-transparent from-neutral-50  bg-neutral-400 bg-opacity-50  '>
          Simple Pricng <br />Choose your plan
        </div>
        <div className='grid md:grid-cols-3 gap-6 px-6 md:w-5/6 2xl:w-3/4 cursor-pointer pb-20 items-start'>
          {Plans.map((plan, index) => (
            <div key={plan.name} className='h-full flex flex-col border justify-between rounded-3xl px-6'>
              <div className={plan.style}>
                <div className='text-4xl flex items-center font-medium'>
                  {plan.name}
                  {plan.feature === "Contact Us" && (
                    <div className='text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center'>
                      Contact Us
                    </div>
                  )}
                </div>
                <div className='text-3xl pt-6'>{plan.price}</div>
                <div className='py-6'>{plan.description}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className='text-lg py-2 flex space-x-2 items-center'
                    >
                      {plan.feature === 'Contact Us' ? (
                        <PiCheckCircleFill className='text-blue-400 mr-2 text-xl' />
                      ) : (
                        <PiCheckCircleFill className='text-green-600 mr-2 text-xl' />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={plan.button}>
                {index === 0 && (

                  <Link href ="/" 
                  className='my-4 w-full mx-auto items-center flex justify-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                    Buy Now
                  </Link>
                )}

                {index === 1 && (

                  <Link href="/" 
                  className='my-4 w-full mx-auto items-center flex justify-center bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                    Buy Now
                  </Link>
                )}

                {index === 2 && (

                  <Link href="/contact" className=' my-4 text-black w-full mx-auto items-center flex justify-center  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                    Contact Us
                  </Link>
                )}



              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default PricingPage
