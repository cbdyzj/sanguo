import Head from 'next/head'
import Favicon from '../components/Favicon'

export default function Home() {
    return (
        <>
            <Head>
                <title>sanguo</title>
                <meta name="description" content="sanguo Here👋"/>
                <Favicon/>
            </Head>
            <main>
                <div className="min-h-screen grid place-items-center">
                    <span className="font-bold text-5xl -translate-y-8">
                    sanguo
                    </span>
                </div>
            </main>
            <footer></footer>
        </>
    )
}
