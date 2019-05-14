let depthFirstSearch = (startNode, vertices, edges) => {
  let stack = [startNode];
  let visited = [startNode];

  while(stack.length != 0) {
    let currentNode = stack.pop();
    if (!currentNode.discovered) {
      currentNode.discovered = true
      findAdjacentNodes(currentNode.name, vertices, edges).forEach(node => {
        visited.push(node);
        stack.push(node);
      })
    }
  }
  return visited;
}

let findVertex = (vertexName, vertices) => {
  return vertices.find(vertex => vertex.name ==  vertexName)
}

let findAdjacentNodes = (nodeName, vertices, edges) => {
  return edges.filter(edge => {
    return edge.includes(nodeName)
  }).map(edge => {
    return edge.filter(node => {
      return node != nodeName
    })
  }).map(vertexName => {
    return findVertex(vertexName, vertices);
  }).filter(node => {
    return node.discovered == null
  })
}
