const baseURL = "http://localhost:8000/api/posts";

export const getPosts = async () => {
  const response = await fetch("${baseURL}");
  if (!response.ok) {
    throw new Error("Failed to load posts. Please try again later.");
  }
  return response.json(); // Return data directly
};

export const createPost = async (title: string) => {
  const response = await fetch("${baseURL}", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error(
      "Failed to add a new post. Please check the title and try again."
    );
  }
  return response.json(); // Return created post directly
};