import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const postsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            setPosts(data)
            setLoading(false)
        })
        .catch((err) => {
            console.error("Error fetching posts:", err)
            setLoading(false)
        });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <PostsContext.Provider
      value={{
        posts,
        currentPage,
        totalPages,
        currentPosts,
        setCurrentPage,

        deletePost: (id) => {
          setPosts((prevPosts) => prevPosts.filter((posts) => posts.id !== id));
        },
        loading,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
