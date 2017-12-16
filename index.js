function depthFirstSearch(rootNode, vertices, edges) {
	let stack = [rootNode];
	let stackDiscovered = [rootNode];
	while (stack.length > 0) {
		let currentNode = stack.pop();
		if (!currentNode.discovered) {
			currentNode.discovered = true;
			let adj = adjacentVertices(currentNode.name, vertices, edges);
			adj.forEach(node => {
				stack.push(node);
				stackDiscovered.push(node)
			})
		}
	}
	return stackDiscovered
}

function adjacentVertices(vertex, vertices, edges) {
	return edges.filter(edge => edge[0] === vertex || edge[1] === vertex)
		.map(edge => edge[0] === vertex ? edge[1] : edge[0]).map(edge => vertices
		.find(vertex => vertex.name === edge))
		.filter(vertex => !vertex.discovered);
}
