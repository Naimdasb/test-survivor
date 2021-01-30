import { useEffect, useState } from 'react';

import { Statistic, Card } from 'antd';
import { useSelector } from 'react-redux';

import { Survivor } from '../../types/survivor';

export const Statistics = () => {
    const [infected, setInfected] = useState<number>(0)

    const survivors = useSelector((state: any) => state.survivors);

    useEffect(() => {
        let counter = 0;
        survivors.forEach((survivor: Survivor) => {
            if (survivor.infected) {
                counter++;
            }
        })
        setInfected(counter);
    }, [survivors])

    return (
        <div className='d-flex gap-3'>
            <Card className="col-sm-4 col-6 mb-5">
                <Statistic title="Total Survivors" value={survivors.length} />
            </Card>
            <Card className="col-sm-4 col-6 mb-5">
                <Statistic title="Total Infected" value={infected} />
            </Card>
        </div>
    )
}