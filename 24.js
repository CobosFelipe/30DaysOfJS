function sortBy(arr, fn) {
  return arr.sort((a, b) => {
    const fnResultA = fn(a);
    const fnResultB = fn(b);

    // orden ascendente:
    return fnResultA - fnResultB;
  });
}