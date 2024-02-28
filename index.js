import 'dotenv/config';
import app from "./app.js";
import { connectToDatabase } from "./db.js";

const PORT = process.env.PORT;

async function main() {
    try {
        await connectToDatabase();
        app.listen(PORT);
        console.log(`>>> Servidor escuchando en el puerto: ${PORT}`);
    } catch (error) {
        console.log(error);
    }
};

main();
