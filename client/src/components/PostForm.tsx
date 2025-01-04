type PostFormProps = {
  newPost: { id: number; title: string };
  setNewPost: React.Dispatch<
    React.SetStateAction<{ id: number; title: string }>
  >;
  createPost: (e: React.FormEvent<HTMLFormElement>) => void;
};

const PostForm: React.FC<PostFormProps> = ({
  newPost,
  setNewPost,
  createPost,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPost({ id: newPost.id, title: e.target.value });
  };

  return (
    <form
      onSubmit={createPost}
      className="w-full max-w-lg bg-white shadow-md rounded-xl p-6 mb-8 border border-gray-200"
    >
      <div className="mb-4">
        <label
          htmlFor="postTitle"
          className="block text-gray-700 font-medium mb-2"
        >
          New Post Title
        </label>
        <input
          id="postTitle"
          type="text"
          placeholder="Write your post title here..."
          value={newPost.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white font-medium py-2 px-4 rounded-md hover:bg-gray-700 transition-all duration-300"
      >
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
