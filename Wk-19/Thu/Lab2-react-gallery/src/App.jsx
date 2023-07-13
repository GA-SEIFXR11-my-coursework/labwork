/* eslint-disable react/prop-types */
import {useState} from "react";
import imageList from "./images";
import "./App.css";

export default function App(){
  const [image, setImage] = useState(imageList[0]);

  const thumbnailList = imageList.map(val=>{
    return(
      <li key={val.imgURL}>
        <ImageThumbnail image={val} setImage={setImage}/>
      </li>
    )
  })
  return(
    <ul>
    <ImageMain image={image}/>
    {thumbnailList}
    </ul>
  )
}

function ImageThumbnail({image, setImage}){
  function handleClick(){
    setImage(image)
  }
  return(
    <div className="imageThumbnail" onClick={handleClick}>
      <img src={`${image.imgURL}`}></img>
    </div>
  )
}

function ImageMain({image}){
  return(
    <div className="imageMain">
      <img src={`${image.imgURL}`}></img>
    </div>
  )
}
