import { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../../Context/BlogContext'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Loader from '../../Components/Loader'
import PostCard from "../../Components/PostCard"
const SinglePost = ({}) => {
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])
  const {posts, users} = useContext(BlogContext)
  const router = useRouter();
  useEffect(()=>{
    if(posts.length === 0) return;
    setPost(posts.find((post) => post.id === router.query.slug).data)
    setAuthor(users.find((user) => user.data.name === 'Ibtihel Ben Salah').data)
    //console.log(users.find((user) => user.id === post?.author).data)
  },[post,posts])
  //<Image src={post.bannerImage} alt={post.brief}/>
  console.log(posts) 
  return (
    <div className='py-[5%] px-[10%]'>   
    {post.length == 0 ? <Loader/>:<div>
      <h1 className='text-[2em] md:text-[5em]'>{post.title}</h1>
      <span height='100vh' width='100%'>
       <Image src={post.bannerImage} alt={post.brief} height='100%' width='100%'/>
      </span>
      <p>{post.brief}</p>
      <p>{post.body}</p>
      <div className='flex flex-row gap-3 p-2 shadow-md'>
        <span height='50px' width='50px'>
        <Image src= {author?.imageUrl} alt ={author?.name} className='rounded-full self-start' height='100%' width='100%'/>
        </span>
        <div>
         <p className="text-[10px]">written by:{author?.name}</p>
         <span className="text-[10px]">{post.createdAt.toDate().toString()}</span>
        </div>
      </div>
      <div>
       {posts.map((post, index) =><PostCard key={post.id} index={post.id} post={post.data} users={users}/>)}
      </div>
    </div>}
    </div>
  )
}

export default SinglePost
