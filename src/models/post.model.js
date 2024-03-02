import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        // images: { type: Number}, TODO: Ver como hacer lo de las imagenes
        description: { type: String },
        likes: {type: Number, default: 0},
        date_publication: { type: Date, default: Date.now },
        id_user: { type: mongoose.Types.ObjectId, ref: "User" }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Post", postSchema);
