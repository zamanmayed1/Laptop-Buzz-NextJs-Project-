import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Head from 'next/head'

export default function Widget({ children }) {
    return (
        <div>
            <Head>
                <title>Home - Laptop Buzz</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />

        </div>
    )
}
