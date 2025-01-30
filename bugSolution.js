function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Handle the case where both inputs are 0
  } else if (a === 0) {
    return b; 
  } else if (b === 0) {
    return a;
  }
  return foo(b % a, a);
}