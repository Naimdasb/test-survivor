import { NextApiResponse, NextApiRequest } from 'next';

import { dbConnect } from '../../db/dbConnect';

import Survivor from '../../db/models/models';

dbConnect();

const getAllDocuments = async () => {
    const data = await Survivor.find({})
    return data;
}

const survivors = (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {
        res.statusCode = 200;
        const survivor = new Survivor(JSON.parse(req.body));
        survivor.save().then(() => {
            console.log('Saved into DB')
        }).catch((error: Error) => {
            console.log(error)
        })
        res.end();
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const data = getAllDocuments();
        res.json(JSON.stringify(data));
        res.end();
    }

}

export default survivors;