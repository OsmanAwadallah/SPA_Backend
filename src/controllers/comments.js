import Comment from "../models/Comment.js"

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("author");
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createComment = async (req, res) => {
  const Comment = req.body;

  const newComment = new Comment(Comment);

  try {
    await newComment.save();
    res.status(201).json("Comment created successfully");
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const updateComment = async (req, res) => {
  const { id: _id } = req.params;
  const Comment = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No Comment with that id" });

  const updatedComment = await Comment.findByIdAndUpdate(
    _id,
    { ...Comment, _id },
    { new: true }
  );

  res.json(updatedComment);
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No Comment with that id" });

  await Comment.findByIdAndRemove(id);

  res.json({ message: "Comment deleted successfully" });
};

export const likeComment = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No Comment with that id" });

  const Comment = await Comment.findById(id);

  const updatedComment = await Comment.findByIdAndUpdate(id, {
    likeComment: Comment.like + 1,
  });

  res.json(updatedComment);
};
