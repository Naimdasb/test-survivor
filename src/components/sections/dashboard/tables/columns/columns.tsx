import { StatusTag } from '../../../../statusTag/StatusTag';
import { Button } from 'antd';

import { ColumnsType } from 'antd/lib/table';

import { Survivor } from '../../../../../types/survivor';

import { SearchOutlined } from '@ant-design/icons';

import { filterDropdown } from '../utils/FilterDropdown'

type Props = {
    onClick: (survivor: Survivor) => () => void;
};

export const getColumns = ({ onClick }: Props): ColumnsType<Survivor> => [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filterDropdown,
        onFilter: (value: string | number | boolean, record: Survivor) =>
            record['name']
                ? record['name']
                    .toString()
                    .toLowerCase()
                    .includes(value.toString().toLowerCase())
                : false,
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        render: (fieldData: string) => fieldData,
    },
    {
        title: 'ID',
        dataIndex: '_id',
        key: 'id'
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city'
    },
    {
        title: 'Weight (kg)',
        dataIndex: 'weight',
        key: 'weight'
    },
    {
        title: 'Height (cm)',
        dataIndex: 'height',
        key: 'height'
    },
    {
        title: 'Infected',
        dataIndex: 'infected',
        key: 'infected',
        render: (infected: boolean) => <StatusTag text={infected ? 'Yes' : 'No'} status={infected} />,
        filters: [
            {
                text: 'Yes',
                value: true,
            },
            {
                text: 'No',
                value: false,
            },
        ],
        onFilter: (value, record) => record.infected === value,
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