import { Table } from 'antd'

import { getColumns } from './columns/columns'

import { Survivor } from '../../../types/survivor';

type Props = {
    data?: Survivor[];
}

export const SurvivorTable = ({ data }: Props) => {
    const handleClick = (survivor: Survivor) => {
        return () => console.log(survivor)
    };
    return (
        <div>
            <Table dataSource={data} columns={getColumns({ onClick: handleClick })} />;
        </div>
    )
}