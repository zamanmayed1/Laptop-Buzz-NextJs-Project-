import Link from 'next/link'
import fetcher from '../../lib/fetcher'
import Author from './Author'
export default function Releted() {
    const { data, isLoading, isError } = fetcher('api/popular')
    if (isLoading) {
        return <h2 className="text-xl font-bold animate-spin text-center">Laptop Buzz</h2>
    }
    if (isError) {
        return <p>error...</p>
    }
    return (
        <section className="pt-20">
            <h1 className='text-xl font-bold py-10 '>Releted</h1>
            <div className="flex flex-col justify-center gap-6">

                {data.map(blog => <div>{Post(blog)}</div>)}

            </div>
        </section>
    )
}

function Post(blog) {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col justify-start">
                <img width={300} height={250} className='rounded' src={blog.img} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className='text-orange-600 hover:text-orange-400 text-sm font-bold'>{blog.category} - <span className="text-gray-800 hover:text-gray-600">{blog.published}</span> </h1>
                </div>
                <div>
                    <Link href={`/post/${blog.id}`}>
                        <a className="text-xl py-2  font-bold text-gray-800 hover:text-gray-600">{blog.title}</a>
                    </Link>
                    <Author author={blog.author} />
                </div>
            </div>

        </div>
    )
}