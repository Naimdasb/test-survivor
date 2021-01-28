import { DashboardTable } from '../components/dashboardTable/DashboardTable';
import { ErrorPage } from './ErrorPage';
import { Survivor } from '../types/survivor';

type Props = {
    data: Survivor[];
    error?: boolean;
}

const Dashboard = ({ data, error }: Props) => {
    if (error) {
        return <ErrorPage errorCode={404} />
    } else {
        return <DashboardTable data={data} />
    }
}

export default Dashboard;

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/survivors`)
    const data = await res.json()

    if (!data) {
        return {
            error: true,
        }
    }

    return {
        props: { data }
    }
}