import { Button } from 'antd';

import { Survivor } from '../../types/survivor';

import { useDispatch, useSelector } from 'react-redux';

import { LoadingOutlined } from '@ant-design/icons';



type Props = {
    survivor: Survivor | null;
}

export const SurvivorPreview = ({ survivor }: Props) => {
    const dispatch = useDispatch();

    const loading = useSelector((state: any) => state.loading);

    const handleClick = () => {
        if (survivor) {
            dispatch({ type: 'UPDATE_SURVIVOR', payload: { id: survivor._id, infected: !survivor.infected } });
        }
    }

    return (
        survivor && <div>
            <h1 className='display-4'>Survivor Details</h1>
            <p className='lead'>Name:</p>
            <p>{survivor.name}</p>
            <p className='lead'>City:</p>
            <p>{survivor.city}</p>
            <p className='lead'>Height:</p>
            <p>{survivor.height + ' cm'}</p>
            <p className='lead'>Weight:</p>
            <p>{survivor.height + ' kg'}</p>
            <p className='lead'>Infected:</p>
            <p>{survivor.infected ? 'Yes' : 'No'}</p>
            <Button onClick={handleClick} type='primary'>{loading ? <LoadingOutlined /> : "Change Status"}</Button>
        </div>
    )
}