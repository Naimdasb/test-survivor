import { NextApiResponse, NextApiRequest } from 'next';

import { dbConnect } from '../../db/dbConnect';

import Survivor from '../../db/models/models';

dbConnect();

const survivors = async (req: NextApiRequest, res: NextApiResponse) => {

    switch (req.method) {
        case 'GET':
            try {
                const data = await Survivor.find({});
                res.status(200).json({ success: true, data });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                await Survivor.create(req.body);
                res.status(200).json({ success: true });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                await Survivor.updateOne({
                    _id: req.body._id
                }, { infected: !req.body.infected }, { upsert: true });

                res.status(200).json({ success: true });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}

export default survivors;
