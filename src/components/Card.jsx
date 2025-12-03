import React, { useContext } from 'react'
import { PostsContext } from '../context/PostContext'

const Card = ({id, title, body}) => {

    const {
        posts,
        deletePost
    } =useContext(PostsContext);


  return (
    <div className="relative bg-white shadow-md p-4 rounded-lg w-full max-w-sm border mx-auto mb-12">
        <button 
            onClick={() => {
                deletePost(id)
            }}
            className='text-red-500 absolute top-2 right-2 text-x font-bold hover:text-red-700'>X</button>

        <h2 className='font-bold text-lg text-gray-800 mb-1 leading-tight'>{title}</h2>
        <p className='text-gray-600 text-sm mb-2'>{body}</p>
        <p className='text-gray-400 text-xs mb-3'>
            {new Date().toLocaleTimeString()} |
            {new Date().toLocaleDateString()}
        </p>

        <img
            src={`https://picsum.photos/id/${id}/200/300`}
            alt="Random"
            className="w-full h-40 object-cover rounded-md mb-3"
        />
    </div>
  )
}

export default Card