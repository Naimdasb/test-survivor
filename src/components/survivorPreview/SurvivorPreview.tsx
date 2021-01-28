import { Survivor } from '../../types/survivor';

type Props = {
    survivor: Survivor | null;
}

export const SurvivorPreview = ({ survivor }: Props) => {
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
        </div>
    )
}