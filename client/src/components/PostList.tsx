import { Post } from "../App";

const PostList = ({
  posts,
  handleDeletePost,
}: {
  posts: Post[];
  handleDeletePost: (id: number) => void;
}) => {
  return (
    <div className="w-full max-w-lg">
      {posts.length > 0 ? (
        <ul className="bg-white shadow-md rounded-xl p-4 border border-gray-200 space-y-2">
          {posts.map((post) => (
            <div
              key={post.id}
              className="w-full gap-5  justify-between items-center flex"
            >
              <li className="w-96 p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition-all duration-300">
                {post.title}
              </li>
              <button
                onClick={() => handleDeletePost(post.id)}
                className="bg-red-500 hover:bg-red-700 transition-all duration-300 rounded-md px-3 py-2 text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">
          No posts yet. Create a new one to get started.
        </p>
      )}
    </div>
  );
};

export default PostList;
