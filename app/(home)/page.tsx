import Navbar from "@/app/(home)/_components/nabbar/navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import SliderOne from "./_components/slider/slider";
import WebsiteDesign from "./_components/website-design";
import GraphicDesign from "./_components/graphic-design";
import ShopifyStores from "./_components/shopify-stores";
import Brands from "./_components/brands";

export default function Home() {
  
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.2] relative overflow-hidden">
      <Navbar/>
      <Spotlight className="left-20 hidden md:flex" fill="white" />

      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-24 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-5 text-center bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50  bg-neutral-400 bg-opacity-50">
          Create, grow, and<br/> scale your business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business,we are a team of creatives who excited to help you grow your business.
        </p>
        <Link href={"/book"}
        className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white ">
          Book a call
        </Link>

        <div className="w-full pt-20">
          <SliderOne/>
          <WebsiteDesign/>
          <GraphicDesign/>
          <ShopifyStores/>
          <Brands/>
        
        </div>


      </div>
    </div>

  );
}
