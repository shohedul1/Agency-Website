'use client';
import Image from "next/image";

const stores = [
    {
        image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1702392637/shohiduld11_3d3c4a6857.jpg",
        qoute: 'Shohidul showed us to get started, what to do, and how to do it.',
        name: 'Jason Scer'
    },
    {
        image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1701696461/image2_bmjgdc.jpg",
        qoute: 'We had no idea how to get started ,but shohidul showed us the way. And we were able to create something amazing.',
        name: 'John Prency'
    },
    {
        image: "https://res.cloudinary.com/djhjt07rh/image/upload/v1701696289/cld-sample.jpg",
        qoute: 'The team at Shohidul is amazing.They helped us create a stunning store that we are proud of.',
        name: 'Miguel Mortinez',
    }
]


const ShopifyStores = () => {
    return (
        <section className="mt-10 md:py-10 bg-[#f6f5f4] w-full rounded-3xl">
            <div className="p-4 mx-auto relative z-10 w-full">
                <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
                    Shopify Stores<br />
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-800 max-w-lg text-center mx-auto">
                    We create stunning Shoppify stores that are designed to convert.
                </p>
                <div className="md:flex items-center justify-center px-10">
                    {stores.map((store, index) => (
                        <div key={index}
                            className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-[300px] h-[300px] relative mx-auto rounded-md overflow-hidden">
                                <Image
                                    src={store.image}
                                    alt="shopify store"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />

                                </div>

                                <p className="text-neutral-800 font-bold text-lg mt-4 text-center">&apos;{store.qoute}</p>
                                <p className="text-neutral-800 font-bold text-lg mt-4">{store.name}</p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>



        </section>
    )
}

export default ShopifyStores
