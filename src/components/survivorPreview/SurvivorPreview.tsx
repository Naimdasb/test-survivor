import { Button } from 'antd';

import { Survivor } from '../../types/survivor';


type Props = {
    survivor: Survivor | null;
    changeStatus: (id: number) => void;
}

export const SurvivorPreview = ({ survivor, changeStatus }: Props) => {

    const handleClick = () => {
        if (survivor) {
            changeStatus(survivor.id)
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