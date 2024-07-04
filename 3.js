var expect = function(val) {
  var object = {
      toBe: function(val2){
          if(val === val2){
              return true
          } else {
              throw new Error("Not Equal")
          }
      },
      notToBe: function(val2){
          if(val !== val2){
              return true
          } else {
              throw new Error("Equal")
          }
      }
  }
  return object
};