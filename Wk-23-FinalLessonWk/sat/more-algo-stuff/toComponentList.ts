export default function toComponentList<T, U extends {val: T, reps: number}>(arr: T[]): U[]{
  let ret = [] as U[];
  arr.forEach((arrVal)=>{
    let index = ret?.findIndex((retVal)=>{
      return(retVal.val == arrVal)
    })
    if(index == -1){
      ret.push({val: arrVal, reps: 1} as U)
    }else{
      ret[index].reps += 1
    }
  })
  return ret;
}
