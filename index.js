function depthFirstSearch (rootNode, vertices, edges) {
	
	let s = [];
	s.push(rootNode);
	let visited = [rootNode];

	while (s.length != 0) {

		let x = s.pop();

		if (!x.discovered) {
			x.discovered = true;

			findAdjacent(x.name, vertices, edges).forEach(function(node){
				visited.push(node);
				s.push(node)
			})

		}
	}
	return visited;
}

function findAdjacent(nodeName, vertices, edges) {
	return edges.filter(function(edge) {
		return edge.includes(nodeName);
	}).map(function(edge) {
		return edge.filter(function(node) {
			return (node != nodeName);
		})[0]
	}).map(function(name) {
		return findNode(name, vertices);
	}).filter(function(node) {
		return !node.discovered;
	})
}

function findNode(nodeName, vertices) {
	return vertices.find(function(vertex) {
		return vertex.name == nodeName;
	})
}