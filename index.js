let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
  {name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
  {name: '23rd&Lex', discovered: null}
]

function depthFirstSearch(rootNode, vertices, edges){
	let stack = []
	stack.push(rootNode)
	let visited = [rootNode]

	while(stack.length != 0){
		let v = stack.pop()
		if(!v.discovered){
			v.discovered = true

			findAdjacent(v.name, vertices, edges).forEach(function(node){
				if (!!node) {
					visited.push(node)
					stack.push(node)						
				}

			})
		}
	}
	return visited;
}

function findVertex(name){
	let foundVertex;
	foundVertex = vertices.find(function(vertex){
		return vertex.name === name && vertex.discovered === null;
	})
	return foundVertex;
}

function findAdjacent(name, vertices, edges){
	let adjacentNodes = [];
	edges.forEach(function(edge){
		if (edge[0] === name) {
			adjacentNodes.push(findVertex(edge[1]));
		} else if (edge[1] === name) {
			adjacentNodes.push(findVertex(edge[0]));
		}
	})
	return adjacentNodes;
}

function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}