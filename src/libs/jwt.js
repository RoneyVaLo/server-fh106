import 'dotenv/config';
import jwt from 'jsonwebtoken';

export async function createAccessToken(payload) {
    const TOKEN_SECRET = process.env.SECRET;

    return new Promise((resolve, reject) => {
        jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
}
