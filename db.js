import 'dotenv/config';
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI;

export async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('>>> Conexión exitosa a la base de datos');
    } catch (err) {
        console.error('!! Error al conectar a la base de datos:', err);
    }
}
