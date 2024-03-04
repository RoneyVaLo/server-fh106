import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        profile_image: { type: Buffer },
        quantity_post: { type: Number, default: 0 },
        followed: { type: Number, default: 0 },
        followers: { type: Number, default: 0 },
        biography: { type: String },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", userSchema);
