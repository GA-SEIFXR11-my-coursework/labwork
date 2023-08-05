// sums 1,2,3,...,N
export default function sum(N: number){
  if( !(Number.isInteger(N) && N > 0) ){
    throw new Error("input must be positive integer")
  }
  return (( N**2 + N ) >> 1);
}
