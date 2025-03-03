import { knightMoves, initializeVertices } from "./KnightsTravail.js";

function main(start, end) {
  initializeVertices();
  const { moves, path } = knightMoves(start, end);
  console.log(
    `The shortest path from ${start} to ${end} takes ${moves} move(s):`
  );
  path.forEach((vertex) => {
    console.log(toArray(vertex));
  });
}

function toArray(vertexNum) {
  const x = Math.floor(vertexNum / 10);
  const y = vertexNum % 10;
  return [x, y];
}

main([0, 0], [7, 7]);
