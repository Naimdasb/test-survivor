import Head from 'next/head';
import { DashboardTable } from '../components/sections/dashboard/DashboardTable';
import { Survivor } from '../types/survivor';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

type Props = {
    data: Survivor[];
}

const Dashboard = ({ data }: Props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'UPDATE_DB', payload: data })
    }, [data])

    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <DashboardTable />
        </div >
    )

}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/survivors')
    const { data } = await res.json()

    return {
        props: { data }
    }
}

export default Dashboard;