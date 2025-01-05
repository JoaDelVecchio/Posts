type PostListProps = {
  posts: { id: number; title: string }[];
  handleDeletePost: (id: number) => void;
  handleUpdatePost: (id: number, title: string) => void;
  editingPostId: number | null;
  setEditingPostId: (id: number | null) => void;
  editingTitle: string;
  setEditingTitle: (title: string) => void;
};

const PostList = ({
  posts,
  handleDeletePost,
  handleUpdatePost,
  editingPostId,
  setEditingPostId,
  editingTitle,
  setEditingTitle,
}: PostListProps) => {
  return (
    <div className="w-full max-w-md">
      {posts.length > 0 ? (
        <ul className="bg-white shadow-md rounded-lg p-4 border border-gray-200 space-y-2">
          {posts.map((post) => (
            <li
              key={post.id} // Key remains stable regardless of the mode
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              {editingPostId === post.id ? (
                <>
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => handleUpdatePost(post.id, editingTitle)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingPostId(null)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-md transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text-gray-800 font-medium flex-1">
                    {post.title}
                  </span>
                  <button
                    onClick={() => {
                      setEditingPostId(post.id);
                      setEditingTitle(post.title);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md transition"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">
          No posts yet. Create one to get started.
        </p>
      )}
    </div>
  );
};

export default PostList;
