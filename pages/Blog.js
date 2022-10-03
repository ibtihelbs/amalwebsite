import PostCard from "../Components/PostCard"
import Link from "next/link"
import { BlogContext } from '../Context/BlogContext'
import { useContext } from 'react'

const Blog = () => {
  const {posts, users} = useContext(BlogContext)
  //console.log(posts, users)
  return (
    <div>
      <Link href="/">
          <a className="goBack"><svg xmlns="http://www.w3.org/2000/svg" className="arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>العودة للصفحة الرئيسية</a>
      </Link>
      {
        posts.map((post, index) =>
        <PostCard key={post.id} index={post.id} post={post.data} />
        )
      }
      
    </div>
  )
}

export default Blog
