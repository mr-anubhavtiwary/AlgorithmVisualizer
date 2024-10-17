export function randomMaze(board, row, col) {
	let newBoard = board.slice();
	const pairs = [];
	for (let i = 0; i < row; i++) {
		newBoard[i][0].isWall = true;
		pairs.push({
			xx: i,
			yy: 0,
		});
		newBoard[i][col - 1].isWall = true;
		pairs.push({
			xx: i,
			yy: col - 1,
		});
	}
	for (let i = 0; i < col; i++) {
		newBoard[0][i].isWall = true;
		pairs.push({
			xx: 0,
			yy: i,
		});
		newBoard[row - 1][i].isWall = true;
		pairs.push({
			xx: row - 1,
			yy: i,
		});
	}
	for (let i = 1; i < row - 1; i++) {
		for (let j = 1; j < col - 1; j++) {
			const random = Math.floor(Math.random() * 100) + 10;
			if (random % 4 === 0) {
				newBoard[i][j].isWall = true;
				pairs.push({
					xx: i,
					yy: j,
				});
			}
		}
	}
	return pairs;
}
