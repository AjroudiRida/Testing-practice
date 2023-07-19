class Calculator {


  add (a, b) {
    let sum = 0;
    if (a >= 0 && b >= 0)
    {
      if(a%2 === 0 && b%2 === 0)
      {
        sum = a + b
      }
      else{
        throw new Error('the numbers must be multiple of 2')
      }
    }
    else
    {
      throw new Error('the numbers must be positives')
    }

    return sum;
  }

  subtract (a, b)
  {
    let sub = 0;
    if(a >=0 && a <=100 && b >= 0 && b <= 100)
    {
      if(a >= b)
      {
        sub = a - b;
      }
      else {
        throw new Error('a must be greater than b')
      }
    }
    else{
      throw new Error('values must be between 0 and 100')
    }
    return sub;
  }

  divide (a, b)
  {
    let d = 0;
    if (b !== 0)
    {
      if(a > 0 && b > 0){
        d = a/b;
      }else{
        throw new Error('a and b must be positive numbers')
      }
    }
    else {
      throw new Error('b must not equal to 0')
    }
    return d;
  }

  multiply (a, b)
  {
    let m = 0;
    if (a >= 0 && b >= 0)
    {
      if (Number.isInteger(a) && Number.isInteger(b))
      {
        m = a * b
      }
      else{
        throw new Error('a and b must be Integer')
      }
    }
    else
    {
      throw new Error('a and b must be positive')
    }
    return m
  }
}

module.exports = Calculator
