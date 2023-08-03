export default function titularise(phrase: string){
  return phrase
    .split(" ")
    .reduce((wordList, word, index)=>{
      if(index === 0){
        return [...wordList, upcaseFirst(word)]
      }else if(["and", "or", "the", "of"].includes(word)){
        return [...wordList, word]
      }else{
        return [...wordList, upcaseFirst(word)]
      }
    }, [] as string[])
    .join(" ")
  ;
}

function upcaseFirst(word: string){
  return word.charAt(0).toUpperCase() + word.slice(1);
}
