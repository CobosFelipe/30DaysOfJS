const filter = function(arr, fn) {
  const output = [];
  for (let i=0; i<arr.length; i++){
      if(fn(arr[i], i)){
          output.push(arr[i])
      }
    return output
  }
};