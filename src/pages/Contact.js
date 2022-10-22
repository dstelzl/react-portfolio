import React from 'react'

const Contact = () => {
  return (
    <div className='container p-5'>
    <h1 id='contact'>Contact Me!</h1>
    <form className='p-5'>
      <div className="mb-3 ">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input className="form-control" type="text" id="name" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input className="form-control" type="email" id="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea className="form-control" id="message" required />
      </div>
     
    </form>
  </div>
)
}

export default Contact