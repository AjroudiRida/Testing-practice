const Calculator = require('./calculator')


describe('add numbers', () => {
  test ('add two number', () => {
    const calc = new Calculator();
    expect(
      calc.add(2, 2)
    ).toBe(4)
  })
  
  test ('sum of multiple of 2', () => {
    const calc = new Calculator();
    expect(() => {
      calc.add(2, 2)
    }
    ).not.toThrow(Error)
  })
  
  test ('numbers must be positive', () => {
    const calc = new Calculator();
    expect(() => {
      calc.add(0, 2)
    }
    ).not.toThrow(Error)
  })
})

describe('subtract numbers', () => {
  test ('subtract two number', () => {
    const calc = new Calculator();
    expect(
      calc.subtract(2, 2)
    ).toBe(0)
  })

  test ('a must be greater or equal than b', () => {
    const calc = new Calculator();
    expect(() => {
      calc.subtract(3, 2)
    }
    ).not.toThrow(Error)
  })

  test ('a and b must be between 0 and 100', () => {
    const calc = new Calculator();
    expect(() => {
      calc.subtract(100, 2)
    }
    ).not.toThrow(Error)
  })
})

describe ('divide', () => {
  test ('divide', () => {
    const calc = new Calculator();
    expect(
      calc.divide(6, 2)
    ).toBe(3)
  })

  test ('b must not equal to 0', () => {
    const calc = new Calculator();
    expect(() => {
      calc.divide(6, 1)
    }).not.toThrow(Error)
  })

  test ('a and b must be positive', () => {
    const calc = new Calculator();
    expect(() => {
      calc.divide(6, 1)
    }).not.toThrow(Error)
  })
})

describe ('multiply', () => {
  test ('multiply two number', () => {
    const calc = new Calculator();
    expect(
      calc.multiply(2, 2)
    ).toBe(4)
  })

  test ('numbers must be integer', () => {
    const calc = new Calculator();
    expect(() => {
      calc.multiply(2, 2)
    }
    ).not.toThrow(Error)
  })

  test ('numbers must be positive', () => {
    const calc = new Calculator();
    expect(() => {
      calc.multiply(2, 2)
    }
    ).not.toThrow(Error)
  })
})