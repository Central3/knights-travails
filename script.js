const board = [...Array(8)].map((e) => Array(8).fill(0));

function getEdges(pos) {
  let possibleMoves = [];

  possibleMoves.push([pos[0] + 1, pos[1] + 2]);
  possibleMoves.push([pos[0] + 2, pos[1] + 1]);
  possibleMoves.push([pos[0] - 1, pos[1] + 2]);
  possibleMoves.push([pos[0] - 2, pos[1] + 1]);
  possibleMoves.push([pos[0] + 1, pos[1] - 2]);
  possibleMoves.push([pos[0] + 2, pos[1] - 1]);
  possibleMoves.push([pos[0] - 1, pos[1] - 2]);
  possibleMoves.push([pos[0] - 2, pos[1] - 1]);

  possibleMoves = possibleMoves.filter(
    (coord) => coord[0] >= 0 && coord[0] < 8 && coord[1] >= 0 && coord[1] < 8
  );

  return possibleMoves;
}

function bfs(source) {
  const queue = [];
  const visited = [];

  queue.push(source);
  visited.push(source);

  while (queue.length) {
    const curr = queue.shift();
    console.log(curr);

    const edges = getEdges(curr);
    edges.forEach((vertex) => {
      const isVisited = visited.find(
        (ele) => JSON.stringify(ele) === JSON.stringify(vertex)
      );
      if (!isVisited) {
        visited.push(vertex);
        queue.push(vertex);
      }
    });
  }
}

function knightMoves(currPos, endPos) {
  let edges = getEdges(currPos);

  bfs(currPos);
}

knightMoves([0, 0], [3, 3]);
