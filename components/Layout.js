import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                    <title>Bi Nguyen - The Athletic</title>
                    <link rel="icon" href="alphabet-b.svg"></link>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}