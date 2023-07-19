const capitalize = require('./capitalize') 

test ('capitalize the first letter', () => {
  expect (
    capitalize('rida')
  ).toBe('Rida')
})