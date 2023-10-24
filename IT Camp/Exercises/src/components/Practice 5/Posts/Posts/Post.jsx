export const Post = ({ post }) => {
  return (
    <div className="posts">
      <h1>{post?.title}</h1>
      <p>{post?.reaction}</p>
    </div>
  )
}
