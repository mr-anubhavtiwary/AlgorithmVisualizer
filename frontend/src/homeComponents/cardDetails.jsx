import graph from ".././images/graph.png";
import primes from ".././images/primes.jpg";
import sort from ".././images/sort.png";
import queen from ".././images/queen.PNG";
import binSearch from ".././images/binaryTree.png";
import Recursion from ".././images/Recursion.jpg";
export function getDetails() {
	return [
		{
			id: 1,
			title: "Pathfinder",
			description: "Visualize graph algorithms like dijkstra, BFS, DFS",
			route: "/pathfinder",
			img: graph,
		},
		{
			id: 2,
			title: "Tree",
			description:
				"Visualize tree traversals like inorder, preorder, postorder",
			route: "/tree",
			img: Recursion,
		},
		{
			id: 3,
			title: "Sorting Algorithm",
			description: "Compare different sorting algorithms",
			route: "/sort",
			img: sort,
		},
		{
			id: 4,
			title: "Recursive Sorting",
			description: "Compare different recursive sorting algorithms",
			route: "/recursivesort",
			img: sort,
		},
		{
			id: 5,
			title: "N Queen",
			description:
				"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
			route: "/nqueen",
			img: queen,
		},
		{
			id: 6,
			title: "Prime Numbers",
			description: "Visualize how Seive is better than brute force",
			route: "/prime",
			img: primes,
		},
		{
			id: 7,
			title: "Binary Search",
			description:
				"Binary search is an efficient algorithm for finding an item from a sorted list of item",
			route: "/binarysearch",
			img: binSearch,
		},
	];
}
