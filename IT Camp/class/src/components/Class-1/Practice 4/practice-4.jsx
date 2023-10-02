import { useState } from 'react'
import './practice-4.css'

export default function BlogMaker() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')

  return (
    <div className='create'>
      <h2>Add a new blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='ilhan'>Ilhan</option>
          <option value='emina'>Emina</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  )
}
