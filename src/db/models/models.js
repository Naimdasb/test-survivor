import mongoose from 'mongoose';

const { Schema } = mongoose;

const survivorSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    infected: { type: Boolean, required: true }
})

export default mongoose.models.Survivor || mongoose.model('Survivor', survivorSchema);
