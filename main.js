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

const start = [parseInt(process.argv[2]), parseInt(process.argv[3])];
const end = [parseInt(process.argv[4]), parseInt(process.argv[5])];

main(start, end)
