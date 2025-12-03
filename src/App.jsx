import { useContext, useEffect, useState } from 'react'
import Card from './components/Card';
import { PostsContext } from './context/PostContext';


function App() {
 const {
            posts,
            currentPage,
            totalPages,
            currentPosts,
            setCurrentPage,
            loading,
 } = useContext(PostsContext);

  if(loading){
    return(
      <div className='flex justify-center items-center h-screen text-3xl text-black'>
        Loading
      </div>
    )
  }

  return (
    <div className='h-screen mx-[10vw] mt-[10vh]'>
    <main className='flex flex-wrap p-4 '>
      {currentPosts.map((post) => (
        <Card key={post.id} id={post.id} title={post.title} body={post.body}/>
      ))}
    </main>
    <footer className='mt-5 flex gap-2 justify-center'>
      {[...Array(totalPages)].map((_, i) => (
        <button 
          key={i} 
          onClick={() => setCurrentPage(i + 1)}
          className={`m-1 ${currentPage === (i + 1) ? "bg-blue-400" : "bg-blue-300"} border-none text-white rounded-full h-12 w-12 text-center`}
        >
          {i + 1}
        </button>
      ))}

    </footer>
    </div>
  )
}

export default App
