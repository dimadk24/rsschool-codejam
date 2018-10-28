function make(...args) {
  const allArguments = [];
  const innerMake = (...innerArgs) => {
    const firstArg = innerArgs[0];
    if (typeof firstArg === 'function') {
      return allArguments.reduce(firstArg);
    }
    allArguments.push(...innerArgs);
    return innerMake;
  };
  return innerMake(...args);
}

module.exports = { make };
