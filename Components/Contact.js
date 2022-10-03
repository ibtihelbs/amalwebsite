import React from 'react'

const Contact = () => {
  return (
    <div className="Contact">
      <h1>:للتواصل معنا</h1>
      <form>
        <div>
        <label>Email : </label>
         <input placeholder="email" type="text" className="form-control"/>
        </div>
        <div>
         <label>Suject : </label>
         <input placeholder="subject" type="text" className="form-control"/>
        </div>
        <div>
         <label>Message : </label>
         <textarea placeholder="message"></textarea>
        </div>
      </form>
    </div>
  )
}

export default Contact
