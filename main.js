
/* 
Vertices are respresented by an integer from 0 to 77. e.g. 4 represents the vertex (0,4) and 54 is (5,4).
For each index 0 - 77, insert an array containing all adjacent vertices.
To do this, add and subtract 12 and 21 from the index, and if it is still withing the board, add it to the array.
*/

/* 
To get shortest path given start and end, begin at start and add adjacent vertices to queue.
Process queue by repeatedly adding adjacent vertices.
Keep track of "depth" throughout iteration.
Eventually when end vertex is reached, return depth.
Also add vertices in path to an array so it can be printed out at the end.
*/

const vertices = [];
const moves = [-21, -19, -12, -8, 8, 12, 19, 21];

console.log(vertices);

for (let i = 0; i < 78; i++) {
  const adjacent = [];
  moves.forEach((move) => {
    if (inBoard(i + move)) {
      adjacent.push(i + move);
    }
  });
  vertices.push(adjacent);
}

console.log(vertices);

function inBoard(point) {
  if (point > 77) {
    return false;
  }
  if (point < 0) {
    return false;
  }
  if (point % 10 > 7) {
    return false;
  }
  return true;
}
