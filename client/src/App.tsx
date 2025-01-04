import React, { useState } from "react";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { getPosts, createPost } from "./api/api";
import ErrorMessage from "./components/ErrorMessage";
import GetPostButton from "./components/GetPostButton";

export type Post = {
  id: number;
  title: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Post>({ id: 0, title: "" });
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");

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

  const handleUpdatePost = async (id: number, title: string) => {
    try {
      const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error("Failed to update the post.");
      }

      const updatedPost = await response.json();
      setPosts((prevPost) =>
        prevPost.map((post) => (post.id === id ? updatedPost : post))
      );
      setEditingPostId(null);
    } catch (error) {
      console.error(error);
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

      <main>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col items-center p-6">
            <PostForm
              newPost={newPost}
              setNewPost={setNewPost}
              createPost={handleCreatePost}
            />
            <GetPostButton handleGetPosts={handleGetPosts} />

            {/* DISPLAY IF THERE IS AN ERROR */}
            {error && <ErrorMessage error={error} />}

            <PostList
              posts={posts}
              handleDeletePost={handleDeletePost}
              handleUpdatePost={handleUpdatePost}
              editingPostId={editingPostId}
              setEditingPostId={setEditingPostId}
              editingTitle={editingTitle}
              setEditingTitle={setEditingTitle}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
