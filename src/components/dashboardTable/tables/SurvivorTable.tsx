import { useState } from 'react';

import { Table } from 'antd';

import { getColumns } from './columns/columns';

import { Survivor } from '../../../types/survivor';

import { Drawer } from 'antd';

import { SurvivorPreview } from '../../survivorPreview/SurvivorPreview';

type Props = {
    data?: Survivor[];
}

export const SurvivorTable = ({ data }: Props) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [survivor, setSurvivorData] = useState<Survivor | null>(null);

    const onClose = () => {
        setVisible(false);
    };

    const handleClick = (survivor: Survivor) => {
        return () => {
            setSurvivorData(survivor);
            setVisible(true);
        }
    };

    return (
        <div>
            <Table dataSource={data} columns={getColumns({ onClick: handleClick })} />;
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width="30%"
            >
                <SurvivorPreview survivor={survivor} />
            </Drawer>
        </div>
    )
}