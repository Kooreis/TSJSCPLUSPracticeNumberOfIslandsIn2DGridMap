public numIslands(grid: string[][]): number {
        if (grid === null || grid.length === 0) {
            return 0;
        }

        this.grid = grid;
        this.visited = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(false));

        let islands = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '1' && !this.visited[i][j]) {
                    this.dfs(i, j);
                    islands++;
                }
            }
        }

        return islands;
    }