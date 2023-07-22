import {useState} from "react";

export interface CommentsPropsT{
  commentList: {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }[]
}

export default function Comments(props: CommentsPropsT){
  const {commentList} = props;
  const [comments, setComments] = useState(commentList)

  const commentsRenderList = comments.map((val)=>{
    return(
    <div key={val.id}>
      <p>postId: {val.postId}</p>
      <p>id: {val.id}</p>
      <p>name: {val.name}</p>
      <p>email: {val.email}</p>
      <p>body: {val.body}</p>
    </div>
    )
  })
  return(
    <div>{commentsRenderList}</div>
  )
}
