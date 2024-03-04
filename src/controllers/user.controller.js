import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from '../models/user.model.js';
import { createAccessToken } from "../libs/jwt.js";

// Esto es como el registro de usuarios
export const createUser = async (req, res) => {
    try {
        const { email, password, name, username } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: passwordHash,
            name,
            username
        });

        const userSaved = await newUser.save();

        const token = await createAccessToken(
            {
                id: userSaved._id,
                name: userSaved.name,
                username: userSaved.username,
                email: userSaved.email
            }
        );

        res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Esto es como el inicio de sesión de usuarios
export const getUser = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        let userFound = await User.findOne({ email });

        // Valida si el usuario inicia sesión con email o con nombre de usuario
        if (!userFound) {
            userFound = await User.findOne({ username });

            if (!userFound) {
                return res.status(400).json({ message: "Datos de inicio de sesión incorrectos..." });
            }
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Datos de inicio de sesión incorrectos... contra" });
        }

        const token = await createAccessToken(
            {
                id: userFound._id,
                name: userFound.name,
                username: userFound.username,
                email: userFound.email
            }
        );

        res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
