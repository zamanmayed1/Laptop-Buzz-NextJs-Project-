import Image from "next/image"
import Link from "next/link"
import Author from "./Child/Author"
import Overview from "./Child/Overview"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from "react";
import fetcher from "../lib/fetcher";
export default function HeaderSection() {
    SwiperCore.use(Autoplay)
    const { data, isLoading, isError } = fetcher('api/trending')
    if (isLoading) {
        return <h2 className="text-xl font-bold animate-spin text-center">Laptop Buzz</h2>
    }
    if (isError) {
        return <p>error...</p>
    }

    return (

        <section className='py-16'>
            <div className='container mx-auto md:px-20 p-2'>
                <h1 className="font-bold text-4xl pb-12 text-center text-indigo-500" >Trending</h1>
                <Swiper
                    autoplay={
                        {
                            delay: 3000
                        }
                    }
                    loop={true}
                    slidesPerView={1}

                >
                    {
                        data.map(blog => <SwiperSlide key={blog.id} >{Slide(blog)}</SwiperSlide>)
                    }


                </Swiper>


            </div>
        </section>
    )
}


function Slide(blog) {
    return (
        <div className="grid md:grid-cols-2 gap-6 cursor-pointer">
            <div className="image">

                <img className='w-[600px] h-[400px]' src={blog.img} alt="" />
            </div>
            <div className="info">
                <div>
                    <h1 className='text-orange-600 hover:text-orange-400 text-sm font-bold'>{blog.category} - <span className="text-gray-800 hover:text-gray-600">{blog.published}</span> </h1>
                </div>
                <div>
                    <Link href={`/post/${blog.id}`}>
                        <a className="text-3xl py-2  font-bold text-gray-800 hover:text-gray-600"> {blog.title}  </a>
                    </Link>
                    <Link href={`/post/${blog.id}`}>
                        <a className="text-xl my-3 block  font-bold text-gray-800 hover:text-gray-600"> {blog.description.slice(0, 225)}  </a>
                    </Link>
                    <p className='text-gray-500 py-3'>
                        {blog.des}
                    </p>
                </div>
                {/* <Overview overview={blog.overview} /> */}
                <Author author={blog.author} />
            </div>
        </div>
    )
}