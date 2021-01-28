import { StatusTag } from '../../../statusTag/StatusTag';
import { Button } from 'antd';

import { ColumnsType } from 'antd/lib/table';

import { Survivor } from '../../../../types/survivor';


type Props = {
    onClick: (survivor: Survivor) => () => void;
};

export const getColumns = ({ onClick }: Props): ColumnsType<Survivor> => [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'id',
        dataIndex: 'id',
    },
    {
        title: 'City',
        dataIndex: 'city',
    },
    {
        title: 'Weight (kg)',
        dataIndex: 'weight',
    },
    {
        title: 'Height (cm)',
        dataIndex: 'height',
    },
    {
        title: 'Infected',
        dataIndex: 'infected',
        render: (infected: boolean) => <StatusTag text={infected ? 'Yes' : 'No'} status={infected} />
    },
    {
        title: 'Actions',
        key: 'actions',
        render: (survivor: Survivor) => {
            return (
                <span>
                    <Button type="primary" onClick={onClick(survivor)}>
                        Review
                    </Button>
                </span>
            );
        },
    },
];