import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className="Contact">
      <h1>:للتواصل معنا</h1>
      <form>
        <div>
        <label>Email : </label>
         <input  placeholder="email" type="text" className="form-control border-[#000]"/>
        </div>
        <div>
         <label>Suject : </label>
         <input placeholder="subject" type="text" className="form-contro border-[#000]l"/>
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
