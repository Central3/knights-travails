function getEdges(pos) {
  let possibleMoves = [];

  // calculate all possible knight moves
  possibleMoves.push([pos[0] + 1, pos[1] + 2]);
  possibleMoves.push([pos[0] + 2, pos[1] + 1]);
  possibleMoves.push([pos[0] - 1, pos[1] + 2]);
  possibleMoves.push([pos[0] - 2, pos[1] + 1]);
  possibleMoves.push([pos[0] + 1, pos[1] - 2]);
  possibleMoves.push([pos[0] + 2, pos[1] - 1]);
  possibleMoves.push([pos[0] - 1, pos[1] - 2]);
  possibleMoves.push([pos[0] - 2, pos[1] - 1]);

  // filter out moves that land outside the bounds of the board (0 - 7)
  possibleMoves = possibleMoves.filter(
    (coord) => coord[0] >= 0 && coord[0] < 8 && coord[1] >= 0 && coord[1] < 8
  );

  return possibleMoves;
}

function bfs(source, dest) {
  const queue = [];
  queue.push(source);

  // create 2D arrays to store parent and distance information
  const parent = [...Array(8)].map((item) => Array(8).fill(-1));
  const distance = [...Array(8)].map((item) => Array(8).fill(Infinity));

  // set distance of source node to 0
  distance[source[0]][source[1]] = 0;

  while (queue.length) {
    const currNode = queue.shift();
    // Get the neighboring nodes of the current node;
    const edges = getEdges(currNode);

    for (const neighbor of edges) {
      // If the neighbor has not been visited yet
      if (distance[neighbor[0]][neighbor[1]] === Infinity) {
        // Update parent and distance information
        distance[neighbor[0]][neighbor[1]] =
          distance[currNode[0]][currNode[1]] + 1;
        parent[neighbor[0]][neighbor[1]] = currNode;
        queue.push(neighbor);
      }
    }
  }

  // check if a path to the destination exists
  if (distance[dest[0]][dest[1]] === Infinity) {
    console.log("There is no path");
    return;
  }

  // Reconstruct the path from destination to source
  const path = [];
  path.push(dest);
  let currentNode = dest;
  while (parent[currentNode[0]][currentNode[1]] != -1) {
    path.push(parent[currentNode[0]][currentNode[1]]);
    currentNode = parent[currentNode[0]][currentNode[1]];
  }

  // Reverse the path to get the correct order
  console.log(path.reverse());
}

function knightMoves(currPos, endPos) {
  bfs(currPos, endPos);
}

knightMoves([3, 3], [4, 3]);
