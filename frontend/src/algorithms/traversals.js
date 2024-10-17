export const inOrder = (node, visit = []) => {
	if (!node) return;
	inOrder(node.left, visit);
	visit(node);
	inOrder(node.right, visit);
};

export const preOrder = (node, visit = []) => {
	if (!node) return;
	visit(node);
	preOrder(node.left, visit);
	preOrder(node.right, visit);
};

export const postOrder = (node, visit = []) => {
	if (!node) return;
	postOrder(node.left, visit);
	postOrder(node.right, visit);
	visit(node);
};
