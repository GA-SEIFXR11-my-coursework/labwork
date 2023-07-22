import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav>
      <div><Link to="image">RandImage</Link></div>
      <div><Link to="post">Post</Link></div>
      <div><Link to="comments">Comments</Link></div>
    </nav>
  )
}
