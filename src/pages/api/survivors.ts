import { NextApiResponse, NextApiRequest } from 'next';

import data from '../../db/survivors.json'

const survivors = (req: NextApiRequest, res: NextApiResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}

export default survivors;