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