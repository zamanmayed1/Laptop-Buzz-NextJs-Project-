export default function Author({ author }) {
    return (
        <div className="my-2 max-w-max flex gap-2 items-center">

            <img className='w-14 h-14 rounded-full' src={author?.img} alt="" />

            <div>
                <h1 className='font-bold'>{author?.name}</h1>
                <h1 className='text-sm'>{author?.designation}</h1>
            </div>
        </div>
    )
}
