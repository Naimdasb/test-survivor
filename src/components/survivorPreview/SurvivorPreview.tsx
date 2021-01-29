import { Button, notification } from 'antd';

import { Survivor } from '../../types/survivor';

import { useDispatch } from 'react-redux';

type Props = {
    survivor: Survivor | null;
}

export const SurvivorPreview = ({ survivor }: Props) => {
    const dispatch = useDispatch();

    const handleClick = async () => {

        try {
            if (survivor) {
                await fetch('http://localhost:3000/api/survivors', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ _id: survivor._id, infected: survivor.infected })
                })
                dispatch({ type: 'UPDATE_SURVIVOR', payload: survivor._id });
            }

            notification.success({ message: 'Success', description: 'Your survivor was updated in the database!' });

        } catch (error) {
            notification.error({ message: 'Error', description: 'There was an error, changes might not be added in the database.' });
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
            <Button onClick={handleClick} type='primary'>Change Status</Button>
        </div>
    )
}