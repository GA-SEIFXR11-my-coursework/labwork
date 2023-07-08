import assert from "assert";

function dividePosInts(numerator: number, denominator: number){
  assert(Number.isInteger(numerator) && Number.isInteger(denominator), "Assert error: Inputs must be integers");
  assert(numerator >= 0 && denominator >= 0, "Assert error: Inputs must be positive. ");
  assert(denominator != 0, "Assert error: Denominator must not be 0");
  var result = numerator/denominator;
  console.log(result);
  return result;
}

function catchCall(A: any, B: any){
  try{
    dividePosInts(A,B)
  }catch(e){
    console.error(e);
  }
}
catchCall(10,15); // OK
catchCall(-5, 10); // negative error
catchCall(11.5, 6); // integer error
catchCall(0, 1); // OK
catchCall(1, 0); // denominator 0 error
catchCall("a", "b") // integer error
