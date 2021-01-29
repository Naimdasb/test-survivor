import mongoose from 'mongoose';

const { Schema } = mongoose;

const survivorSchema = new Schema({
    name: String,
    city: String,
    age: Number,
    height: Number,
    weight: Number,
    infected: Boolean
})

export default mongoose.models.Survivor || mongoose.model('Survivor', survivorSchema);
