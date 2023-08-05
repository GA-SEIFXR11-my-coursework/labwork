export default function fibonacci(N: number): number{
  if ( !(Number.isInteger(N) && N >= 0) ){
    throw new Error("Input must be positive integer")
  }
  if( N <= 1 ){
    return N
  }else{
    return fibonacci(N-1) + fibonacci(N-2)
  }
}
