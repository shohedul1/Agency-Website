'use client';

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./snipppents/3d-card-snippet";
import { EvervaultCardSnippet } from "./snipppents/evervault-cart-snippet";

const GraphicDesign = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-24 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-5 text-center bg-clip-text text-transparent  bg-gradient-to-b from-purple-500  bg-gray-100 bg-opacity-50">
          Graphic Design<br />
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We create  stunning visuals for brand.From logos to social media posts, we&apos;ve got you covered.
        </p>
        <div className='items-center md:flex justify-center md:mx-auto md:space-x-10'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0.5"
          >
            <ThreeDCardExample />

          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0.5"
          >
            <EvervaultCardSnippet />

          </motion.div>

        </div>
      </div>

    </div>
  )
}

export default GraphicDesign
