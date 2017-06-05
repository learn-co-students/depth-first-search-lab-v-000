function findAdjacentNodes(node, vertices, edges) {
	var adjacentNames = {},
		adjacentNodes = [];

	edges.forEach(function(edge) {
		if (edge[0] === node.name) {
			adjacentNames[edge[1]] = edge[1];
		} else if (edge[1] === node.name) {
			adjacentNames[edge[0]] = edge[0];
		}
	});

	vertices.forEach(function(vertex) {
		if (adjacentNames.hasOwnProperty(vertex.name)) {
			adjacentNodes.push(vertex);
		}
	});

	return adjacentNodes;
}

function depthFirstSearch(rootNode, vertices, edges) {
	var stack = [rootNode],
		visited = [],
		currentNode;

	while (stack.length > 0) {
		currentNode = stack.pop();
		if (!currentNode.discovered) {
			currentNode.discovered = true;
			visited.push(currentNode);
			stack = stack.concat(findAdjacentNodes(currentNode, vertices, edges));
		}
	}

	return visited;
}