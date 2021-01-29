import { SurvivorTable } from './tables/SurvivorTable';

export const DashboardTable = () => {

    return (
        <div style={{ height: '100vh' }}>
            <div className='container'>
                <h1 className='display-4 py-5'>Dashboard</h1>
                <SurvivorTable />
            </div>
        </div>
    )
}