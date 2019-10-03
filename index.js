function findVertex(nodeName, vertices) {
  for (let i = 0; i < vertices.length; i++) {
    if (vertices[i].name === nodeName) return vertices[i]
  }
}

function findAdjacent(nodeName, verticesArr, edgePairs) {
  let edges = []
  edgePairs.forEach(pair => {
    pair.forEach((edge, i) => {
      if (edge === nodeName) {
        i === 0 ? edges.push(pair[1]) : edges.push(pair[0])
      }
    })
  })
  return edges.map(edge => findVertex(edge, verticesArr))
}

function depthFirstSearch(startNode, vertices, edgePairs) {
  let stack = [startNode]
  let visited = [startNode]
  while (stack.length > 0) {
    let node = stack.pop()
    if (!node.discovered) {
      node.discovered = true
      findAdjacent(node.name, vertices, edgePairs)
        .forEach(edgeNode => {
          if (!edgeNode.discovered) visited.push(edgeNode)
          stack.push(edgeNode)
        })
    }
  }
  return visited
}
