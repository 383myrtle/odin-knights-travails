# Odin Knight's Travails

Knight's Travails project from the Odin Project course. This project calculates the shortest path that a knight can take between any two given squares on a chessboard.

## Table of Contents

- [Introduction](#introduction)
- [Algorithm](#algorithm)
- [Usage](#usage)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is part of the Odin Project curriculum. It focuses on implementing an algorithm to determine the shortest path a knight can take on a chessboard from a starting square to a target square.

## Algorithm

The algorithm uses breadth-first search (BFS) to find the shortest path between two squares on a chessboard, represented as vertices of a graph. The index of each element in the `vertices` array corresponds to a unique point on the chessboard. The value at that index is an array of all the vertices adjacent to that one (its neighbors).

The `knightMoves` function begins at the given starting point and checks if it matches the ending point. If not, it adds its neighbors to the queue, then repeats for each item in the queue until the end point is reached.

## Usage

To use this project, clone the repository and run the script with the starting and ending positions as arguments.
Ensure that node is installed before running.


```bash
git clone https://github.com/383myrtle/odin-knights-travails.git
cd odin-knights-travails
node main.js start_x start_y end_x end_y
```

Replace `start_x`, `start_y`, `end_x`, and `end_y` with the coordinates of the starting and ending squares.

## Example

Here is an example of how to use the script:

```bash
node main.js 0 0 7 7
```

This command will calculate the shortest path for a knight to travel from the bottom-left corner (0,0) to the top-right corner (7,7) of the chessboard.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.