import { useState } from 'react';

import { Table } from 'antd';

import { getColumns } from './columns/columns';

import { Survivor } from '../../types/survivor';

import { Drawer } from 'antd';

import { SurvivorPreview } from '../survivorPreview/SurvivorPreview';
import { useDispatch, useSelector } from 'react-redux';

import { notification } from 'antd';

export const SurvivorTable = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [survivor, setSurvivorData] = useState<Survivor | null>(null);

    const data = useSelector((state: any) => state.survivors);

    const dispatch = useDispatch();

    const onClose = () => {
        setVisible(false);
    };

    const handlePreview = (survivor: Survivor) => {
        return () => {
            setSurvivorData(survivor);
            setVisible(true);
        }
    };

    const handleRemove = (id: number) => {

        return async () => {
            try {
                await fetch('http://localhost:3000/api/survivors', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(id)
                })
                dispatch({ type: 'REMOVE_SURVIVOR', payload: id });

                notification.success({ message: 'Success', description: 'Your survivor was successfuly removed from the database!' });
            } catch (error) {
                notification.error({ message: 'Error', description: 'There was an error.' });
            }
        }

    }



    return (
        <div>
            <Table dataSource={data} columns={getColumns({ handlePreview, handleRemove })} scroll={{ x: '100%' }} rowKey={record => record._id} bordered />
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width="70%"
            >
                <SurvivorPreview survivor={survivor} />
            </Drawer>
        </div>
    )
}