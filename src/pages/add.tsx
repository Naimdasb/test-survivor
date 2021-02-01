import Head from 'next/head';

import { AddForm } from '../components/sections/add/AddForm';
const Index = () => {
    return (
        <div>
            <Head>
                <title>Add Survivor</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <AddForm />
        </div>
    )
}

export default Index;