import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Lora } from 'next/font/google';

const font = Lora({
  subsets: ['latin'],
  weight: ['400'],
});

const logos = [
  {
    image: '/logos/logo1.svg'
  },
  {
    image: '/logos/logo2.svg'
  },
  {
    image: '/logos/logo3.svg'
  },
  {
    image: '/logos/logo4.svg'
  },
  {
    image: '/logos/logo5.svg'
  },
  {
    image: '/logos/logo6.svg'
  },
];

const Brands = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32">
        <div className="text-4xl pb-5 md:text-7xl px-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 bg-gray-100 bg-opacity-50">
          The best brands<br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          From small businesses to large corporations, we have helped many brands elevate their business.
        </p>

        <div className='grid grid-cols-3 items-center justify-center mx-auto cursor-pointer w-3/5'>
          {
            logos.map((logo, index) => (
              <div key={index} className='p-4 items-center justify-center mx-auto md:p-20'>
                <Image priority src={logo.image} width={500} height={500} alt='logo' className='w-full h-auto max-w-full rounded-lg' />
              </div>
            ))
          }
        </div>

        <div className={cn("flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 px-8 text-center text-white", font.className)}>
          &quot;We got rid of nearly a dozen different tools because of what Shohidul does for us.&quot;
        </div>

        <div className='items-center flex justify-center flex-col text-white'>
          <Image 
          src={"/logos/logo7.svg"}
          alt='logo'
          width={1000}
          height={1000}
          className='pt-2 xl:pt-0 w-10 xl:w-14'
          />
          
          <div className='text-center'>
            <div className='text-sm font-medium pt-4'>Carlos Hernandex</div>
            <div className='text-sm'>Marketing Director, Palium Software</div>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Brands;
