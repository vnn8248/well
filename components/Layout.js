import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                    <title>Bi Nguyen - ReadMe</title>
                    <link rel="icon" href="blue-circle.svg"></link>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}