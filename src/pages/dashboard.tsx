import { DashboardTable } from '../components/dashboardTable/DashboardTable';
import { ErrorPage } from './error/ErrorPage';
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

    if (error) {
        return <ErrorPage errorCode={404} />
    } else {
        return <DashboardTable />
    }
}

export default Dashboard;

export async function getStaticProps() {
    try {
        const res = await fetch(`http://localhost:3000/api/survivors2`)
        const data = await res.json()
        return {
            props: { data }
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
        }
    }
}