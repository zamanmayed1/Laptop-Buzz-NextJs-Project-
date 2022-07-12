export default function Overview({ overview }) {
    return (
        <div className="w-full shadow p-2 rounded-md ">
            <div className="grid grid-cols-3 justify-items-center items-center">
                <div className=" w-40 p-2 rounded-md ">
                    <h2 className='text-4xl py-1 text-center font-bold text-orange-600 hover:text-orange-400'>{overview.projectDone}+</h2>
                    <h2 className='text-xl py-1 text-center font-bold text-green-600'>Project Done</h2>
                </div>
                <div className=" w-40 p-2 rounded-md">
                    <h2 className='text-4xl py-1 text-center font-bold text-orange-600 hover:text-orange-400'>{overview.reviews}</h2>
                    <h2 className='text-xl py-1 text-center font-bold text-green-600'>Review's</h2>
                </div>
                <div className=" w-40 p-2 rounded-md">
                    <h2 className='text-4xl py-1 text-center font-bold text-orange-600 hover:text-orange-400'>{overview.developer}</h2>
                    <h2 className='text-xl py-1 text-center font-bold text-green-600'>Developer</h2>
                </div>
            </div>

        </div>
    )
}
