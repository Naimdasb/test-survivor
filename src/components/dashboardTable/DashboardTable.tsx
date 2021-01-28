import { useEffect, useState } from 'react'
import { Table } from './tables/Table';

import { Survivor } from '../../types/survivor';

type Props = {
    data?: Survivor[];
}


export const DashboardTable = ({ data }: Props) => {
    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <div>
            Dashbaord
            <Table />
        </div>
    )
}