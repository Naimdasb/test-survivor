import { SurvivorTable } from './tables/SurvivorTable';
import { Statistics } from '../../statistic/Statistics';

export const DashboardTable = () => {

    return (
        <div style={{ minHeight: '100vh' }}>
            <div className='container'>
                <h1 className='display-4 py-5'>Dashboard</h1>
                <SurvivorTable />
                <Statistics />
            </div>
        </div>
    )
}