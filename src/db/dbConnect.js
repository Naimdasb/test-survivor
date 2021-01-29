import mongoose from 'mongoose';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

export const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URI, options)
        .then(() => {
            console.log('Mongoose connection done');
        })
        .catch((e) => {
            console.log('Mongoose connection error');
        });
}