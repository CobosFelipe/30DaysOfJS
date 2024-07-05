const addTwoPromises = async function(promise1, promise2) {
  let res1 = await promise1
  let res2 = await promise2
  return res1+res2
};