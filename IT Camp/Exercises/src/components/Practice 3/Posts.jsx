export default function Posts({ posts }) {
  return (
    <div className='posts'>
      <h1>{posts.title}</h1>
      <h2>{posts.reaction}</h2>
    </div>
  )
}