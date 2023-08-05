import toComponentList from "./toComponentList";
export default function isSubList(A: string[], B: string[]){
  // find smaller array
  const [shortArray, longArray] = (A.length <= B.length) ? [A, B] : [B, A];
  const [short, long] = [toComponentList(shortArray), toComponentList(longArray)]
  const test = short.every((shortVal)=>{
    // since .any() isn't a thing, !every(!test) == any(test)
    // deepCompare any shortVal == longVal
    return ! long.every((longVal)=>{
      return(JSON.stringify(shortVal) != JSON.stringify(longVal))
    })
  })
  return test;
}
