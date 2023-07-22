export interface PostPropsT{
  post: {
    userId: number,
    id: number,
    title: string,
    body: string
  }
}

export default function Post(props: PostPropsT){
  const {post} = props;
  return(
    <div>
      <p>userId: {post.userId}</p>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
    </div>
  )
}
