/* eslint-disable react/prop-types */

import axios from "axios";
import { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

export default function App(){
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [joke, setJoke] = useState('');

  useEffect(()=>{
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then((res)=>{
        let categories = res.data;
        setCategories(categories);
        setCategory(categories[0]);
        console.log("useeffect occured");
      })
    ;
    return;
  },[])

  function getJoke(){
    let url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    setJoke('');
    axios.get(url)
      .then((res)=>{
        setJoke(res.data.value)
      })
    ;
    return
  }

  return(
    <>
      <Categories categories={categories} category={category} setCategory={setCategory}/>
      <Button variant="contained" onClick={()=>{getJoke()}}>Get Joke</Button>
      <p>Category: {category}</p>
      <p>{(joke!=='') ? joke : '...'}</p>
    </>
  )
}

function Categories({categories, category, setCategory}){
  function handleChange(e){
    let category = e.target.value;
    setCategory(category);
    return
  }
  const catButtons = categories.map((cat)=>{
    return(
      <ToggleButton key={cat} value={cat}>
        {cat}
      </ToggleButton>
    )
  })
  return(
    <ToggleButtonGroup
      color="primary"
      value={category}
      exclusive
      onChange={handleChange}
    >
      {catButtons}
    </ToggleButtonGroup>
  )
}
