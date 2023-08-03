export default function getLongestWordLength(phrase: string){
  return phrase
    .split(" ")
    .map((v: string)=>{
      return(v.length)
    })
    .reduce((prev, next)=>{
      return( prev > next ? prev : next)
    })
  ;
}
