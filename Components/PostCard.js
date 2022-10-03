import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase' 
const PostCard = ({post, index}) => {
  const [author, setAuthor] = useState(null);
  useEffect(() => {

    const getAuthorData = async () => {
      setAuthor((await  getDoc(doc(db, 'Users', post.author))).data())
    }
    getAuthorData()
  },[])
  return (
    <Link href={`/SinglePost/${index}`}>
      <div>
      <h1>name is{author?.name}</h1>
      <h1>{post.title}</h1>
      <p>{post.brief}</p>
      <h2>time:{new Date(post.postOn).toLocaleString('en-Us',{
        day: 'numeric',
        month: 'short',
      })}</h2>
      <h2>written by:{post.author}</h2>
      </div>
    </Link>
  )
}

export default PostCard
