# Question: How can you calculate the number of islands in a 2D grid map? JavaScript Summary

The JavaScript code calculates the number of islands in a 2D grid map using a Depth-First Search (DFS) algorithm. The function `numIslands` takes a 2D grid as input. If the grid is null or empty, it returns 0. Otherwise, it initializes a counter `numberOfIslands` to 0 and iterates over each cell in the grid. If a cell contains '1' (representing land), it increments `numberOfIslands` by the result of the `dfs` function called with the grid and the current cell's coordinates. The `dfs` function checks if the current cell is within the grid boundaries and contains '1'. If not, it returns 0. Otherwise, it marks the current cell as visited by setting its value to '0' and recursively calls `dfs` on its four neighboring cells (up, down, left, and right). This way, it traverses all cells of the current island. After visiting all cells of an island, `dfs` returns 1, which is added to `numberOfIslands`. After iterating over all cells in the grid, `numIslands` returns `numberOfIslands`, which is the total number of islands in the grid.

---

# TypeScript Differences

The TypeScript version of the solution uses a class-based approach, which is not available in JavaScript. The class `Solution` encapsulates the grid, visited cells, and the direction vectors for DFS as private properties. This encapsulation makes the code more organized and easier to understand.

The TypeScript version also uses a 2D boolean array `visited` to keep track of the cells that have been visited. This is different from the JavaScript version, which modifies the original grid to mark visited cells.

In the TypeScript version, the `dfs` method is private and does not return a value. It uses a for loop to iterate over the four possible directions (up, down, left, right) for DFS, which is more concise than the JavaScript version.

The TypeScript version also uses type annotations to ensure type safety. For example, the `numIslands` method takes a 2D string array as input and returns a number. The `dfs` method takes two numbers as input and does not return a value. These type annotations help prevent type-related errors and make the code easier to understand.

In terms of functionality, both versions solve the problem in the same way. They both use a DFS algorithm to traverse the grid and count the number of islands. The main differences are in the structure and style of the code, not in the underlying algorithm or logic.

---

# C++ Differences

Both the JavaScript and C++ versions solve the problem using the Depth-First Search (DFS) algorithm. However, there are some differences in the language features and methods used.

1. Data Types: In JavaScript, all numbers are floating point numbers, while in C++, there are different types of integers and floating point numbers. In this case, the C++ version uses `int` for integer values.

2. Arrays: In JavaScript, arrays can be created and manipulated directly. In C++, arrays are more complex and less flexible, so the C++ version uses `vector`, a container from the Standard Template Library (STL), to create a 2D array.

3. Function Definitions: In JavaScript, functions can be defined anywhere in the code and called before they are defined due to hoisting. In C++, functions must be declared before they are used.

4. Class and Object: The C++ version uses a class to encapsulate the solution, which is not present in the JavaScript version. The `Solution` class in C++ has public and private methods, and an object of this class is created to call the `numIslands` method.

5. Checking for Visited Cells: The JavaScript version modifies the input grid to mark visited cells by changing '1' to '0'. The C++ version, on the other hand, uses a separate `visited` 2D vector to keep track of visited cells.

6. DFS Implementation: The C++ version uses a more compact way to check all four directions (up, down, left, right) using two arrays `dx` and `dy`, while the JavaScript version uses four separate recursive calls.

7. Input/Output: JavaScript uses `console.log` for output, while C++ uses `cout`. The input in JavaScript is a variable, while in C++, it's a vector of vectors.

8. Error Checking: JavaScript checks if the grid is null or has a length of 0, while C++ checks if the grid is empty.

---
