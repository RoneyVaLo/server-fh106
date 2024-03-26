import Comment from '../models/comment.model.js';

export const createComment = async (req, res) => {
    try {
        const { id_post, id_user, content } = req.body;

        const newComment = new Comment({
            id_post,
            id_user,
            content,
        });

        const commentSaved = await newComment.save();

        res.status(201).json({ commentSaved });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};