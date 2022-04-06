Here is a TypeScript solution for the problem:

```typescript
class Solution {
    private grid: string[][];
    private visited: boolean[][];
    private dx: number[] = [-1, 0, 1, 0];
    private dy: number[] = [0, 1, 0, -1];

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

    private dfs(x: number, y: number): void {
        if (x < 0 || y < 0 || x >= this.grid.length || y >= this.grid[0].length || this.visited[x][y] || this.grid[x][y] === '0') {
            return;
        }

        this.visited[x][y] = true;

        for (let i = 0; i < 4; i++) {
            this.dfs(x + this.dx[i], y + this.dy[i]);
        }
    }
}

let grid: string[][] = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

let solution = new Solution();
console.log(solution.numIslands(grid)); // Output: 1
```

This solution uses a depth-first search (DFS) to traverse the grid. It starts from the top-left cell and moves to its neighbors (up, down, left, right) if they are land ('1') and have not been visited yet. When it cannot move to any unvisited land cell, it goes back to the previous cell and continues the search. This process is repeated until all cells have been visited. The number of islands is the number of times the DFS is started.