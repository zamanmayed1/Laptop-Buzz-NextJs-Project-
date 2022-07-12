import Author from "../../Components/Child/Author";
import Releted from "../../Components/Child/Releted";
import Widget from "../../Layout/Widget";
import Head from "next/head";
import getPost from "../../lib/helper";
import { useRouter } from 'next/router'
export default function SinglePost({ posts }) {
    const router = useRouter()
    let id = router.query.postid
    let post = posts.find(value => value.id == id)
    return (
        <Widget>

            <section className="container mx-auto px-2 py-16 lg:w-1/2">
                <div onClick={() => router.back()} className="w-10 h-10 cursor-pointer"><img src="https://www.nicepng.com/png/full/191-1910545_back-button-circular-left-arrow-symbol-comments-circle.png" alt="" /></div>
                <div className="flex justify-center">
                    <Author author={post.author} />
                </div>
                <div className="post py-10">
                    <h1 className="font-bold text-3xl text-center pb-5 ">{post.title ? post.title : 'Title Unknown'}</h1>
                    <p className='text-gray-500'>{post.subtitle ? post.subtitle : 'Unknown'}</p>
                </div>
                <div className="py-6">
                    <img className='mx-auto border' src={post.img ? post.img : 'https://meyertimber.com/uploads/images/presets/product_page_normal/store/products/NO_IMAGE.jpg'} alt="" />
                </div>
                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                    <p>{post.description ? post.description : 'No Description'}</p>
                </div>
                <Releted />
            </section>
        </Widget>
    )
}

export async function getStaticProps() {
    const posts = await getPost()
    return { props: { posts } }
}

export async function getStaticPaths() {
    const posts = await getPost();
    const paths = posts.map(value => {
        return {
            params: {
                postid: value.id.toString()
            }

        }
    })
    return {
        paths,
        fallback: false
    }
}
