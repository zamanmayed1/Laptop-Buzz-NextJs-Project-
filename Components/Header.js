import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import Link from 'next/link'
export default function Header() {
    return (
        <header className="bg-gray-50 lg:sticky top-0 z-40">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2  flex justify-center py-4 sm:py-0">
                    <input className="input-text " type="text" placeholder="Search..." />
                </div>
                <div className='shrink w-80 sm:order-1 order-1'>
                    <Link href={'/'}><a className="font-bold text-xl uppercase ">Laptop Buzz</a></Link>
                </div>
                <div className='w-96 order-3 flex justify-center'>
                    <div className='flex gap-6'>
                        <Link href="/">
                            <a><ImFacebook color="#888888" /></a>
                        </Link>
                        <Link href="/">
                            <a><ImTwitter color="#888888" /></a>
                        </Link>
                        <Link href="/">
                            <a><ImGithub color="#888888" /></a>
                        </Link>


                    </div>
                </div>
            </div>

        </header>
    )
}
