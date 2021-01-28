import { useEffect, useState } from 'react'
import { SurvivorTable } from './tables/SurvivorTable';

import { Survivor } from '../../types/survivor';

type Props = {
    data?: Survivor[];
}


export const DashboardTable = ({ data }: Props) => {
    return (
        <div className='container'>
            <h1 className='display-4 py-5'>Dashbaord</h1>
            <SurvivorTable data={data} />
        </div>
    )
}