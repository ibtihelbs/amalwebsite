import { useState, useContext } from 'react';
import { BlogContext } from '../Context/BlogContext';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
const NewPost = () => {
  const {currentUser} = useContext(BlogContext);
  const [newPost, setNewPost] = useState({
   name: currentUser.displayName,
   title: '',
   body: '',
   category: '',
  })
  const submitPost = async (e) =>{
   e.preventDefault();
   console.log(newPost)
   await addDoc(collection(db, 'Articles'), newPost)
  }
  return (
    <form onSubmit={submitPost}>
      <div>
         <label>Title</label>
         <input type="text" onChange={(e)=> setNewPost({...newPost, title : e.target.value})} />
      </div>
      <div>
         <label>brief</label>
         <input type="text" onChange={(e)=> setNewPost({...newPost, brief : e.target.value})} />
      </div>
      <div>
         <label>text</label>
         <textarea type="text" onChange={(e)=> setNewPost({...newPost, body : e.target.value})}></textarea>
      </div>
      
      <div>
         <label>category</label>
         <select onSelect={(e)=> setNewPost({...newPost, category : e.target.value})}>
          <option value="recycle">Recycle</option>
          <option value="event">Event</option>
         </select>
      </div>
      <button type="submit">Post</button>
    </form>
  )
}

export default NewPost
