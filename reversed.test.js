const reverseString = require('./reversed')

test ('return string reversed', () => {
  expect(
    reverseString('rida')
  ).toBe('adir')
})