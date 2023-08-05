export default function stars(N: number): number{
  if ( !(Number.isInteger(N) && N >= 0) ){
    throw new Error("Input must be positive integer")
  }

  if(N <= 0){
    return 0
  }else{
    console.log('*'.repeat(N));
    return N + stars(Math.floor(N/2))
  }
}
