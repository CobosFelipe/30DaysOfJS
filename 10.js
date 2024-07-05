const once = function(fn) {
  let hasBeenCalled = false;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};