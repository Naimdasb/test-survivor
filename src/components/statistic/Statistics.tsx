import { useEffect, useState } from 'react';

import { Statistic, Card } from 'antd';
import { useSelector } from 'react-redux';

import { Survivor } from '../../types/survivor';

export const Statistics = () => {
    const [value, setValue] = useState<number>(0)

    const survivors = useSelector((state: any) => state.survivors);

    useEffect(() => {
        let counter = 0;
        survivors.forEach((survivor: Survivor) => {
            if (survivor.infected) {
                counter++;
            }
        })
        setValue(counter);
    }, [survivors])

    return (
        <Card className="col-sm-4 col-6 mb-5">
            <Statistic title="Total Infected" value={value} />
        </Card>
    )
}