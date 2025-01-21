const board = [...Array(8)].map((e) => Array(8).fill(0));

function knightMoves(currPos, endPos) {
  let possibleMoves = [];

  possibleMoves.push({ x: currPos[0] + 1, y: currPos[1] + 2 });
  possibleMoves.push({ x: currPos[0] + 2, y: currPos[1] + 1 });
  possibleMoves.push({ x: currPos[0] - 1, y: currPos[1] + 2 });
  possibleMoves.push({ x: currPos[0] - 2, y: currPos[1] + 1 });
  possibleMoves.push({ x: currPos[0] + 1, y: currPos[1] - 2 });
  possibleMoves.push({ x: currPos[0] + 2, y: currPos[1] - 1 });
  possibleMoves.push({ x: currPos[0] - 1, y: currPos[1] - 2 });
  possibleMoves.push({ x: currPos[0] - 2, y: currPos[1] - 1 });

  possibleMoves = possibleMoves.filter(
    (coord) => coord.x >= 0 && coord.x < 8 && coord.y >= 0 && coord.y < 8
  );
  console.log(possibleMoves);
}

knightMoves([0, 0], [1, 2]);
