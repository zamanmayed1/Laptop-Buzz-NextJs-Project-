import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import Link from 'next/link'
import NewsLatter from "./Child/NewsLatter";

const Footer = () => {

    return (
        <footer className='bg-gray-50  md:bg-[url("https://cdni.iconscout.com/illustration/premium/thumb/laptop-and-coffee-3075583-2607455.png")] bg-no-repeat  bg-left-bottom p-2'>
            <NewsLatter />
            <div className="container mx-auto flex justify-center ">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
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
                    <div className='text-center'> <p className='text-gray-400 py-5 '>Copyright ©2022 All rights reseved | This Project is made with by Kamruzzaman Mayed </p>
                        <p className='text-gray-400'>Terms & Condition</p></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;