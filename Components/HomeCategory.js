import Link from 'next/link'
import fetcher from '../lib/fetcher'
import Author from './Child/Author'
export default function HomeCategory() {
    const { data, isLoading, isError } = fetcher('api/posts')
    if (isLoading) {
        return <h2 className="text-xl font-bold animate-spin text-center">Laptop Buzz</h2>
    }
    if (isError) {
        return <p>error...</p>
    }
    return (
        <section className="container mx-auto md:px-20 py-16 p-2">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className='text-xl font-bold py-10 '>HardWare</h1>
                    <div className="flex flex-col justify-center gap-6">
                        {
                            data.slice(0, 3).map(blog => <div>{Post(blog)}</div>)
                        }


                    </div>
                </div>
                <div className="item">
                    <h1 className='text-xl font-bold py-10 '> SoftWare</h1>
                    <div className="flex flex-col justify-center gap-6">
                        {
                            data.slice(4, 6).map(blog => <div>{Post(blog)}</div>)
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

function Post(blog) {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col justify-start">
                <img className='w-[300px] ' src={blog.img} alt="" />
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