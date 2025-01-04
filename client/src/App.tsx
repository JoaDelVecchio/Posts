import React, { useState } from "react";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import { getPosts, createPost } from "./api/api";

export type Post = {
  id: number;
  title: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({ id: 0, title: "" });
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const createdPost = await createPost(newPost.title);
      setPosts((prevPosts) => [...prevPosts, createdPost]);
      setNewPost({ id: 0, title: "" });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:8000/api/posts/${String(id)}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete post with id ${id}`);
      }
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Header />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="text-xl font-semibold text-gray-600 animate-pulse">
            Loading posts...
          </div>
        </div>
      ) : (
        <main className="flex flex-col items-center p-6">
          <PostForm
            newPost={newPost}
            setNewPost={setNewPost}
            createPost={handleCreatePost}
          />
          <button
            onClick={handleGetPosts}
            className="px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-all duration-300 mb-6"
          >
            Load All Posts
          </button>
          {error && (
            <div className="text-red-600 font-medium mt-4 text-center">
              {error}
            </div>
          )}
          <PostList posts={posts} handleDeletePost={handleDeletePost} />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
