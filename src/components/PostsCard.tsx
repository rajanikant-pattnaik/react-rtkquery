function PostsCard({post}:{post:Post}) {
  return (
    <div>
      <h4>{post.name}</h4>
      <h4>{post.id}</h4>
      <h4>{post.userId}</h4>
    </div>
  )
}

export default PostsCard
