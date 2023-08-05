import sum from "./sum"

test("Testing simple sums", ()=>{
  expect(sum(1)).toBe(1)
  expect(sum(3)).toBe(6)
  expect(sum(5)).toBe(15)
  expect(sum(10)).toBe(55)
  expect(sum(110)).toBe(6105)
})

test("Invalid numbers",()=>{
  expect(()=>{sum(0)}).toThrow()
  expect(()=>{sum(-1)}).toThrow()
  expect(()=>{sum(1.1)}).toThrow()
})
