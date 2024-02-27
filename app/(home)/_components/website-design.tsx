import Image from 'next/image'
import React from 'react'

const WebsiteDesign = () => {
    return (
        <div className='text-white'>
            <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-24 px-2">
                <div className="text-4xl pb-5 md:text-7xl px-5 text-center bg-clip-text text-transparent  bg-gradient-to-b from-purple-500  bg-gray-100 bg-opacity-50">
                    Website Design<br /> that works
                </div>
                <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
                    Creating, designing and developing websities that work for your business.
                </p>
            </div>
         
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" />
                    </div>
                    <div>
                        <Image alt='image' width={500} height={500} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WebsiteDesign
