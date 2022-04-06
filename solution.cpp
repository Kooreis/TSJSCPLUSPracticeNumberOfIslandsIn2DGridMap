```cpp
#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        if (grid.empty() || grid[0].empty()) return 0;
        int H = grid.size();
        int W = grid[0].size();
        int answer = 0;
        vector<vector<bool>> visited(H, vector<bool>(W, false));
        for (int i = 0; i < H; ++i) {
            for (int j = 0; j < W; ++j) {
                if (!visited[i][j] && grid[i][j] == '1') {
                    DFS(grid, visited, i, j);
                    ++answer;
                }
            }
        }
        return answer;
    }
private:
    void DFS(vector<vector<char>>& grid, vector<vector<bool>>& visited, int x, int y) {
        static const int dx[] = {-1, 1, 0, 0};
        static const int dy[] = {0, 0, -1, 1};
        visited[x][y] = true;
        for (int direction = 0; direction < 4; ++direction) {
            int nx = x + dx[direction], ny = y + dy[direction];
            if (nx >= 0 && nx < grid.size() && ny >= 0 && ny < grid[0].size() && grid[nx][ny] == '1' && !visited[nx][ny]) {
                DFS(grid, visited, nx, ny);
            }
        }
    }
};

int main() {
    vector<vector<char>> grid = {
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'}
    };
    Solution solution;
    cout << solution.numIslands(grid) << endl;
    return 0;
}
```