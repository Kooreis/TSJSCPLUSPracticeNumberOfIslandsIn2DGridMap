Here is a JavaScript solution using Depth-First Search (DFS) algorithm:

```javascript
function numIslands(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }

    let numberOfIslands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numberOfIslands += dfs(grid, i, j);
            }
        }
    }

    return numberOfIslands;
}

function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return 0;
    }

    grid[i][j] = '0';

    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);

    return 1;
}

let grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

console.log(numIslands(grid));
```

This console application will output the number of islands in the 2D grid map. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.