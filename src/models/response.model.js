import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
    {
        id_comment: { type: mongoose.Types.ObjectId, ref: "Comment" },
        id_user: { type: mongoose.Types.ObjectId, ref: "User" },
        content: {type: String, required: true},
        date_publication: { type: Date, default: Date.now },
        likes: {type: Number, default: 0}
    },
    {
        timestamps: true
    }
);

export default mongoose.Model("Response", responseSchema);
