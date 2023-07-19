const stringLength = (string) => {
  const l = string.length;
  if (l < 1 || l > 10)
  {
    throw new Error("string is more than 10 characters or there is no character at all");
  }
  return l;
}

module.exports = stringLength