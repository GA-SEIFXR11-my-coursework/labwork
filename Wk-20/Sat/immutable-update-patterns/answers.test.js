const a = require('./answers')

describe('f0', () => {
  const orig = [0, 1, 2, 3, 4]
  const result = a.f0(orig)

  it('should add "5" to the end of the array', () => {
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should NOT modify the original array', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f1', () => {
  const orig = [1, 2, 3, 4, 5]
  const result = a.f1(orig)

  it('should add "0" to the start of the array', () => {
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should NOT modify the original array', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f2', () => {
  const orig = [42, 1, 2, 3, 4, 5]
  const result = a.f2(orig)

  it('should replace 42 with 0', () => {
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should NOT modify the original array', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f3', () => {
  const orig = [0, 1, 2, 3, 4, 5]
  const result = a.f3(orig)

  it('should increment each number in the array by 2', () => {
    expect(result).toEqual([2, 3, 4, 5, 6, 7])
  })

  it('should NOT modify the original array', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f4', () => {
  const orig = [0, 3, 1, 2, 3, 4, 5, 6, 3]
  const result = a.f4(orig)

  it('should remove the 3s from the array', () => {
    expect(result).toEqual([0, 1, 2, 4, 5, 6])
  })

  it('should NOT modify the original array', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f5', () => {
  const orig = [0, 1, 2, 4, 4, 5]
  const result = a.f5(orig)

  it('should replace the first 4 with a 3', () => {
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
  })

  it('should NOT modify the original array', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f6', () => {
  const orig = { name: 'Tonto', age: 5, balls: 2 }
  const result = a.f6(orig)

  it('should replace "Tonto" with "Tonto Bear"', () => {
    expect(result).toEqual({ name: 'Tonto Bear', age: 5, balls: 2 })
  })

  it('should NOT modify the original object', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f7', () => {
  const orig = { name: 'Tonto', age: 5, balls: 2 }
  const result = a.f7(orig)

  it('should add `likes: "Walkies"`', () => {
    expect(result).toEqual({ name: 'Tonto', age: 5, balls: 2, likes: 'Walkies' })
  })

  it('should NOT modify the original object', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f8', () => {
  const orig = { name: 'Tonto', age: 5, balls: 2 }
  const result = a.f8(orig)

  it('should remove the balls property', () => {
    expect(result).toEqual({ name: 'Tonto', age: 5 })
  })

  it('should NOT modify the original object', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f9', () => {
  const orig = [
    { name: 'Tonto', smart: true },
    { name: 'Sailor', smart: false },
    { name: 'Scout', smart: false },
    { name: 'Odin', smart: true },
    { name: 'Poppy', smart: true }
  ]
  const result = a.f9(orig)

  it(`should change the Scout object's smart property to true`, () => {
    expect(result).toEqual([
      { name: 'Tonto', smart: true },
      { name: 'Sailor', smart: false },
      { name: 'Scout', smart: true },
      { name: 'Odin', smart: true },
      { name: 'Poppy', smart: true }
    ])
  })

  it('should NOT modify the original array or its objects', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f10', () => {
  const orig = [
    { name: 'Tonto', smart: true },
    { name: 'Sailor', smart: false },
    { name: 'Scout', smart: false },
    { name: 'Odin', smart: true },
    { name: 'Poppy', smart: true }
  ]
  const result = a.f10(orig)

  it(`should contain only the smart dogs`, () => {
    console.log(result)
    expect(result).toEqual([
      { name: 'Tonto', smart: true },
      { name: 'Odin', smart: true },
      { name: 'Poppy', smart: true }
    ])
  })

  it('should NOT modify the original array or its objects', () => {
    expect(result).not.toEqual(orig)
  })
})

describe('f11', () => {
  const orig = [
    { name: 'Tonto', smart: true },
    { name: 'Sailor', smart: false },
    { name: 'Scout', smart: false },
    { name: 'Odin', smart: true },
    { name: 'Poppy', smart: true }
  ]
  const result = a.f11(orig)

  it('should be sorted by name', () => {
    expect(result).toEqual([
      { name: 'Odin', smart: true },
      { name: 'Poppy', smart: true },
      { name: 'Sailor', smart: false },
      { name: 'Scout', smart: false },
      { name: 'Tonto', smart: true }
    ])
  })

  it('should NOT modify the original array or its objects', () => {
    expect(result).not.toEqual(orig)
  })
})
