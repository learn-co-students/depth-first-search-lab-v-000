function depthFirstSearch(rootNode, vertices, edges){
  let stack = [rootNode]
  let discovery = []
  let currentVertex
  let adjacentNodes

  while(stack.length > 0){
    currentVertex = stack.pop()
    if (!currentVertex.discovered){
      currentVertex.discovered = true
      discovery.push(currentVertex)
      adjacentNodes = findAdjacent(currentVertex.name, vertices, edges)
      for (const adjacentNode of adjacentNodes) {
        stack.push(adjacentNode)
      }
    }
  }

  return discovery
}

function findAdjacent(node, vertices, edges) {
  const adjacentNodes = []
  let matches
  for (const edge of edges) {
    if (edge.includes(node)) {
      const target = edge.find(vertex => (
        vertex !== node
      ))
      const targetVertex = vertices.find(myVertex => (
        myVertex.name === target
      ))
      adjacentNodes.push(targetVertex)
    }
  }
  return adjacentNodes
}