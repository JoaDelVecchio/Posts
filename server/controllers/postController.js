let posts = [
  { id: 1, title: "Post1" },
  { id: 2, title: "Post2" },
  { id: 3, title: "Post3" },
];

// @desc Get all posts
// @route GET /api/posts
const getPosts = (req, res, next) => {
  res.json(posts);
};

// @desc Get single post
//@route GET /api/posts/:id
const getPost = (req, res, next) => {
  const { id } = req.params;
  const foundPost = posts.find((post) => post.id == String(id));

  if (!foundPost) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(foundPost);
};

// @desc Create new post
//@route POST /api/posts

const createPost = (req, res, next) => {
  const title = req.body.title;

  if (!title) {
    const error = new Error("The title is missing, try again.");
    error.status = 400;
    return next(error);
  }
  const newPost = {
    id: posts.length + 1,
    title: title,
  };

  posts.push(newPost);
  return res.status(201).json(newPost);
};

// @desc Update post
//@route PUT /api/posts/:id
const updatePost = (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc Delete post
//@route DELETE /api/posts/:id

const deletePost = (req, res, next) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === Number(id));

  if (!post) {
    const error = new Error(`A post with the id ${id} was not found`);
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== Number(id));
  res.status(200).json(posts);
};

export default { getPosts, getPost, createPost, updatePost, deletePost };
