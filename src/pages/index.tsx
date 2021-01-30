import Head from 'next/head';

import { Home } from '../components/sections/home/Home';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Home />
        </div>
    )
}

export default Index;