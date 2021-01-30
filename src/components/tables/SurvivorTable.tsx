import { useState } from 'react';

import { Table } from 'antd';

import { getColumns } from './columns/columns';

import { Survivor } from '../../types/survivor';

import { Drawer } from 'antd';

import { SurvivorPreview } from '../survivorPreview/SurvivorPreview';
import { useDispatch, useSelector } from 'react-redux';

import { notification, Modal } from 'antd';

export const SurvivorTable = () => {
    const [reviewVisible, setReviewVisible] = useState<boolean>(false);
    const [survivor, setSurvivorData] = useState<Survivor | null>(null);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const data = useSelector((state: any) => state.survivors);

    const dispatch = useDispatch();

    const handleOnClosePreview = () => {
        setReviewVisible(false);
    };

    const handleReview = (survivor: Survivor) => {
        return () => {
            setSurvivorData(survivor);
            setReviewVisible(true);
        }
    };

    const handleRemove = (id: string) => () => { setSelectedId(id); setModalVisible(true) }

    const handleCancelModal = () => {
        setModalVisible(false);
        setSelectedId(null);
    }

    const removeSurvivor = (id: string | null) => {

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
                setModalVisible(false);

            } catch (error) {
                notification.error({ message: 'Error', description: 'There was an error.' });
                setModalVisible(false);
            }
        }

    }

    return (
        <div>
            <Table dataSource={data} columns={getColumns({ handleReview, handleRemove })} scroll={{ x: '100%' }} rowKey={record => record._id} bordered />
            <Drawer
                placement="right"
                closable={false}
                onClose={handleOnClosePreview}
                visible={reviewVisible}
                width="70%"
            >
                <SurvivorPreview survivor={survivor} />
            </Drawer>
            <Modal title="Remove Survivor" visible={modalVisible} onOk={removeSurvivor(selectedId)} onCancel={handleCancelModal} centered>
                <p className='lead'>{`Are you sure you want to remove survivor id: ${selectedId} from the database ?`}</p>
            </Modal>
        </div>
    )
}