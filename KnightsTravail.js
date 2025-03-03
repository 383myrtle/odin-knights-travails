const vertices = [];
const moves = [-21, -19, -12, -8, 8, 12, 19, 21];

function initializeVertices() {
  for (let i = 0; i < 78; i++) {
    const adjacent = [];
    moves.forEach((move) => {
      if (inBoard(i + move)) {
        adjacent.push(i + move);
      }
    });
    vertices.push(adjacent);
  }
}

function toNum(vertexArr) {
  return vertexArr[0] * 10 + vertexArr[1];
}

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

function knightMoves(start, end) {
  start = toNum(start);
  end = toNum(end);
  const q = [];
  const visited = [];
  q.push([start, [start]]);
  visited.push(start);

  while (q.length > 0) {
    const [current, path] = q.shift();

    if (current === end) {
      return { moves: path.length - 1, path };
    }

    const adjacencyArray = vertices[current];

    adjacencyArray.some((vertex) => {
      if (!visited.includes(vertex)) {
        q.push([vertex, [...path, vertex]]);
        visited.push(vertex);
      }
    });
  }
}

export { knightMoves, initializeVertices };
