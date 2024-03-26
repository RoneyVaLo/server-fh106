import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        images: [{ type: Number, required: true }],
        description: { type: String },
        likes: { type: Number, default: 0 },
        publication_date: { type: Date, default: Date.now },
        user: { type: mongoose.Types.ObjectId, ref: "User" },
        comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }]
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Post", postSchema);
