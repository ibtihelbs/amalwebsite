import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../Context/BlogContext'
import {useRouter} from 'next/router'
const SinglePost = ({}) => {
  const [post, setPost] = useState([])
  const {posts, users} = useContext(BlogContext)
  const router = useRouter();
 console.log(posts)
  useEffect(()=>{
    if(posts.length === 0) return;
    console.log(router.query.slug)
    setPost(Posts.find((post) => post.id === router.query.slug))
  },[])
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.brief}</p>
      <h2>time:{new Date(post.postOn).toLocaleString('en-Us',{
        day: 'numeric',
        month: 'short',
      })}</h2>
      <h2>written by:{post.author}</h2>
    </div>
  )
}

export default SinglePost
