import { DashboardTable } from '../components/sections/dashboard/DashboardTable';
import { Survivor } from '../types/survivor';
import { useEffect } from 'react';

import { GetStaticProps } from 'next'

import { useDispatch } from 'react-redux';

type Props = {
    data: Survivor[];
}

const Dashboard = ({ data }: Props) => {
    console.log(data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'UPDATE_DB', payload: data })
    }, [])

    return <DashboardTable />

}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/survivors`)
    const { data } = await res.json()

    return {
        props: { data }
    }
}

export default Dashboard;