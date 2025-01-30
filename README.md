This repository demonstrates a common error in recursive functions: the absence of a proper base case leading to infinite recursion. The `foo` function calculates the greatest common divisor (GCD) using Euclid's algorithm. However, if both inputs are 0, the function enters an infinite loop, causing a stack overflow. The solution demonstrates how to correctly handle this edge case.