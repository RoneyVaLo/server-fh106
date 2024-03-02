import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        id_post: { type: mongoose.Types.ObjectId, ref: "Post" },
        id_user: { type: mongoose.Types.ObjectId, ref: "User" },
        content: {type: String, required: true},
        date_publication: { type: Date, default: Date.now },
        likes: {type: Number, default: 0},
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Comment", commentSchema);