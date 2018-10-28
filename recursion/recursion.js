function recursion(tree) {
  if (!(tree.left && tree.right)) {
    return [[tree.value]];
  }
  const left = recursion(tree.left);
  const right = recursion(tree.right);
  const arr = [];
  arr.push([tree.value]);
  for (let i = 0; i < left.length; i += 1) {
    arr.push([...left[i].concat(...right[i])]);
  }
  return arr;
}

module.exports = recursion;
