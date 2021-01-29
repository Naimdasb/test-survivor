import { DashboardTable } from '../components/dashboardTable/DashboardTable';
import { Survivor } from '../types/survivor';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

type Props = {
    data: Survivor[];
    error?: boolean;
}

const Dashboard = ({ data, error }: Props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'UPDATE_DB', payload: data })
    }, [])

    return <DashboardTable />

}

export default Dashboard;

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/survivors`)
    const data = await res.json()
    return {
        props: { data }
    }
}