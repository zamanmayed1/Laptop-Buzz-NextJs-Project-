
export default function NewsLatter() {
    return (
        <section className="mt-20 ">
            <div className="container mx-auto md:px-20 py-16 text-center">
                <h1 className="font-bold text-2xl">Subscribe Newslatter</h1>
                <div className="py-2 flex justify-center items-center gap-4">
                    <input type="text" className="shadow border rounded w-[60%] bg-white py-3 px-3 text-gray focus:outline-none focus:shadow-outline " placeholder="Enter Your Email" />
                    <button className='bg-orange-400 hover:bg-orange-600 px-10 py-3 rounded-lg text-gray-50 text-xl'>Subscribe</button>
                </div>
            </div>
        </section>
    )
}
