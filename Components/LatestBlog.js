import Link from "next/link"
import { useEffect, useState } from "react"
import fetcher from "../lib/fetcher";
import getPost from "../lib/helper";
import Author from "./Child/Author"
export default function LatestBlog() {
    const { data, isLoading, isError } = fetcher('api/posts')
    if (isLoading) {
        return <h2 className="text-xl font-bold animate-spin text-center">Laptop Buzz</h2>
    }
    if (isError) {
        return <p>error...</p>
    }

    return (
        <section className="container md:px-20 mx-auto py-10">
            <h1 className='text-3xl font-bold py-10 text-center'>Latest Post</h1>

            {/*grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data.map(blog => <div key={blog.id}>{Blog(blog)}</div>)
                }


            </div>
        </section>
    )
}

function Blog(blog) {
    return (
        <div className="item p-2">
            <div className="images">
                <img className="w-[500px] h-[300px] " src={blog.img} alt="" />
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div>
                    <h1 className='text-orange-600 hover:text-orange-400 text-sm font-bold'>{blog.category || 'Unknown'} <span className="text-gray-800 hover:text-gray-600"> {blog.published || 'Unknown'}</span> </h1>
                </div>
                <div>
                    <Link href={`/post/${blog.id}`}>
                        <a className="text-xl py-2  font-bold text-gray-800 hover:text-gray-600">{blog.title || 'Unknown'}</a>
                    </Link>
                    <p className='text-gray-500 py-3'>
                        {blog.subtitle}
                    </p>
                </div>
                <Author author={blog.author} />
            </div>
        </div>
    )
}