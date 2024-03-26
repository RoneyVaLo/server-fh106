import Post from '../models/post.model.js';

export const createPost = async (req, res) => {
    try {
        const { images, description, id_user } = req.body;

        const newPost = new Post({
            images,
            description,
            id_user
        });

        const postSaved = await newPost.save();

        res.status(201).json({ postSaved });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPost = async (req, res) => {

    if (req.params && req.params.id) {
        try {
            const { id } = req.params;

            const postFound = await Post.findById(id)
                .populate({
                    path: "user",
                    select: "_id username profile_image"
                })
                .populate({
                    path: "comments",
                    populate: {
                        path: "id_user",
                        select: "_id username profile_image"
                    }
                });

            res.json(postFound);
        } catch (error) {
            res.status(404).json(error);
        }
    } else {
        res.status(404);
        console.log('Error mientras se consultaba el Post');
        res.json({ error: 'Error mientras se consultaba el Post' });
    }
};

export const getPosts = async (req, res) => {

    try {
        if (req.query && req.query.user) {
            const { user } = req.query;
            const posts = await Post.find({ user }).populate({
                path: "user",
                select: "_id username profile_image"
            });
            res.json(posts);
        } else {
            res.status(404);
            console.log('Error mientras se consultaba el Post');
            res.json({ error: 'Error mientras se consultaba el Post' });
        }
    } catch (error) {
        console.log('Error mientras se consultaba el Post');
        res.status(404).json({ error });
    }
};

export const patchPost = async (req, res) => {
    if (req.params && req.params.id) {
        try {
            const { id } = req.params;
            const { comments, images, description, likes } = req.body;

            const postFound = await Post.findById(id);

            postFound.comments = comments ? comments : postFound.comments;
            postFound.images = images ? images : postFound.images;
            postFound.description = description ? description : postFound.description
            postFound.likes = likes ? likes : postFound.likes;

            const userUpdated = await postFound.save();

            res.status(200).json(userUpdated);
        } catch (error) {
            console.log('Error mientras se modificaba la publicación', err)
            res.status(422).json({ error: 'Error mientras se modificaba la publicación' });
        }
    } else {
        res.status(404);
        console.log('Error mientras se consultaba el Post');
        res.json({ error: 'Error mientras se consultaba el Post' });
    }
};
