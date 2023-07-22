import { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from "react-router-dom"

import Comments, {CommentsPropsT} from './components/Comments';
import Post, {PostPropsT} from './components/Post';
import RandomImage from './components/RandomImage';
import Navbar from './components/Navbar';

export default function App(){
  const [post, setPost] = useState({} as PostPropsT["post"]);
  const [comments, setComments] = useState({} as CommentsPropsT["commentList"]);

  useEffect(function(){
    console.log("useEffect App");
    randomPost()
      .then(function(r){setPost(r)})
      .catch(function(e){console.log(e)})
    ;
    randomComment()
      .then(function(r){setComments([r])})
      .catch(function(e){console.log(e)})
    ;
  },[]);

  return(
  <div>
    <h1>asdf</h1>
    <Navbar/>
    <Routes>
      <Route path="image" element={<RandomImage/>}></Route>
      <Route path="post" element={<Post post={post}/>}></Route>
      <Route path="comments" element={<Comments commentList={comments}/>}></Route>
    </Routes>
  </div>
  )
}

async function fetchRandom(url: string){
  const resp = await fetch(url);
  const respList = await resp.json() as [];
  return respList[Math.floor(Math.random() * respList.length)];
}

async function randomPost(){
  return await fetchRandom("https://jsonplaceholder.typicode.com/posts");
}

async function randomComment(){
  return await fetchRandom("https://jsonplaceholder.typicode.com/comments");
}
