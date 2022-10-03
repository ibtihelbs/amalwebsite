import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../../Context/BlogContext'
import {useRouter} from 'next/router'
const SinglePost = ({}) => {
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])
  const {posts, users} = useContext(BlogContext)
  const router = useRouter();
  useEffect(()=>{
    if(posts.length === 0) return;
    
    setPost(posts.find((post) => post.id === router.query.slug).data)
    setAuthor(users.find((user) => user.id === post?.author))
    //console.log(users.find((user) => user.id === post?.author).data)
  },[post])
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>written by:{author?.name}</h2>
    </div>
  )
}

export default SinglePost
