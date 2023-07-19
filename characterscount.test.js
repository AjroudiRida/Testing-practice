const stringLength = require('./characterscount')

test ('return the length of string', () => {
  expect(
    stringLength('rida')
  ).toBe(4)
})


test ('check if the string is at least 1 character long and not longer than 10 characters', () => {
  expect(
    () => {stringLength ('rida')}
  ).not.toThrow(Error)
})