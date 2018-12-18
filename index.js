function depthFirstSearch(rootNode, vertices, edges) {
		let stack = []
		stack.push(rootNode)
		let visited = [rootNode]

		while(stack.length != 0){
			// console.log(`first element in stack is ${stack[0].name}`)
			let v = stack.pop()
			if(!v.discovered){
				v.discovered = true

				findAdjacent(v.name, vertices, edges).forEach(function(node){
					visited.push(node)
					stack.push(node)
				})
			}
		}
		return visited;
}


function findAdjacent(firstNode, vertices, edges) {
  let adjEdge = edges.filter(x => x.includes(`${firstNode}`))
  let adjArray = adjEdge.map(x => x.find(function(element) {return element != firstNode}))
  return vertices.filter(x => adjArray.includes(x.name) && x.discovered === null)
}