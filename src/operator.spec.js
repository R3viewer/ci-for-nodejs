import operator from './operator'

describe('Operators Tests', () => {
  test('sum: positives numbers', () => {
    const a = 3
    const b = 6
    const result = operator.sum(a, b)
    expect(result).toEqual(9)
  })

  test('sum: negative numbers', () => {
    const a = -3
    const b = -6
    const result = operator.sum(a, b)
    expect(result).toEqual(-9)
  })

  test('sum: positive and negative numbers', () => {
    const a = -3
    const b = 6
    const result = operator.sum(a, b)
    expect(result).toEqual(3)
  })

  test('substract: positive numbers', () => {
    const a = 6
    const b = 3
    const result = operator.substract(a, b)
    expect(result).toEqual(3)
  })

  test('substract: negative numbers', () => {
    const a = -6
    const b = -3
    const result = operator.substract(a, b)
    expect(result).toEqual(-3)
  })

  test('substract: positive and negative numbers', () => {
    const a = 6
    const b = -3
    const result = operator.substract(a, b)
    expect(result).toEqual(9)
  })

  test('multiple: positive numbers', () => {
    const a = 6
    const b = 3
    const result = operator.multiple(a, b)
    expect(result).toEqual(18)
  })

  test('multiple: negative numbers', () => {
    const a = -6
    const b = -3
    const result = operator.multiple(a, b)
    expect(result).toEqual(18)
  })

  test('multiple: positive and negative numbers', () => {
    const a = 6
    const b = -3
    const result = operator.multiple(a, b)
    expect(result).toEqual(-18)
  })

  test('divide: positive numbers', () => {
    const a = 6
    const b = 3
    const result = operator.divide(a, b)
    expect(result).toEqual(2)
  })

  test('divide: negative numbers', () => {
    const a = -6
    const b = -3
    const result = operator.divide(a, b)
    expect(result).toEqual(2)
  })

  test('divide: positive and negative numbers', () => {
    const a = 6
    const b = -3
    const result = operator.divide(a, b)
    expect(result).toEqual(-2)
  })
})
