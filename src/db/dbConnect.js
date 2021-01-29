import mongoose from 'mongoose';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const connection = {}

export const dbConnect = async () => {

    if (connection.on) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, options);

    connection.on = db.connections[0].readyState;
}