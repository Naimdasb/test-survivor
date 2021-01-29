import { useState } from 'react';

import { Table } from 'antd';

import { getColumns } from './columns/columns';

import { Survivor } from '../../../types/survivor';

import { Drawer } from 'antd';

import { SurvivorPreview } from '../../survivorPreview/SurvivorPreview';
import { useSelector } from 'react-redux';

type Props = {
    data?: Survivor[];
}

export const SurvivorTable = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [survivor, setSurvivorData] = useState<Survivor | null>(null);


    const data = useSelector((state: any) => state.survivors);

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
            <Table dataSource={data} columns={getColumns({ onClick: handleClick })} scroll={{ x: '100%' }} />
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