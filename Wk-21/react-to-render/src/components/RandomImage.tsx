import { useState, useEffect } from "react";

export default function RandomImage(){
  const [imgUrl, setImgUrl] = useState("");
  useEffect(()=>{
    fetchRandomImage()
      .then((res)=>{
        setImgUrl(res);
      })
      .catch(function(e){
        console.log(e);
      })
    ;
    console.log('useEffect RandomImage')
    return;
  },[]);
  return(
    <img src={imgUrl}></img>
  )
}

async function fetchRandomImage(){
  const resp = await fetch("https://loremflickr.com/320/240");
  return(resp.url);
}
