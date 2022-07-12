import { Swiper, SwiperSlide } from "swiper/react"
import Link from 'next/link'
import Author from "./Child/Author"
import { useEffect, useState } from "react"
import fetcher from "../lib/fetcher"
import SwiperCore, { Autoplay } from 'swiper'
export default function MostPopular() {
    SwiperCore.use(Autoplay)
    const { data, isLoading, isError } = fetcher('api/popular')
    if (isLoading) {
        return <h2 className="text-xl font-bold animate-spin text-center">Laptop Buzz</h2>
    }
    if (isError) {
        return <p>error...</p>
    }
    return (
        <section className="container mx-auto md:px-20 py-16">

            <h1 className='text-3xl font-bold py-10 text-center'>Most Popular</h1>

            <Swiper
                breakpoints={{
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                }}
                loop={true}
                autoplay={
                    {
                        delay: 2000
                    }
                }
            >
                {
                    data.map(blog => <SwiperSlide key={blog.id} >{post(blog)}</SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}

function post(blog) {
    return (
        <div className="grid mx-4  p-2">
            <div className="images  max-h-[400px]">
                <img className="w-full h-full" src={blog?.img} alt="" />
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div>
                    <h1 className='text-orange-600 hover:text-orange-400 text-sm font-bold'>{blog?.category} - <span className="text-gray-800 hover:text-gray-600">{blog?.published}</span> </h1>
                </div>
                <div>
                    <Link href={`/post/${blog.id}`}>
                        <a className="text-2xl py-2  font-bold text-gray-800 hover:text-gray-600">{blog?.title.slice(0, 90)}</a>
                    </Link>
                    <p className='text-gray-500 py-3'>
                        {blog?.subtitle}
                    </p>
                </div>
                <Author author={blog?.author} />
            </div>
        </div>
    )
}