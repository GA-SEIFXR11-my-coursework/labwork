import fib from "./fibonacci"

test("fibonnaci - simple", ()=>{
  expect(fib(0)).toBe(0)
  expect(fib(1)).toBe(1)
  expect(fib(2)).toBe(1)
  expect(fib(7)).toBe(13)
  expect(fib(12)).toBe(144)
})

test("fibonnaci - Invalid numbers",()=>{
  expect(()=>{fib(-1)}).toThrow()
  expect(()=>{fib(1.1)}).toThrow()
})
