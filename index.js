function depthFirstSearch(rootNode, vertices, edges) {
  rootNode.discovered = true;
  let visitedVertices = [rootNode],
      stack = [rootNode];
  while (stack.length) {
    let currentNode = stack.pop(),
        nextNodes = findNextNode(currentNode.name, vertices, edges);
    for (let vertex in nextNodes) {
      nextNodes[vertex].discovered = true;
      stack.push(nextNodes[vertex]);
      visitedVertices.push(nextNodes[vertex]);
    }
  }
  return visitedVertices;
}

function findNextNode(currentNode, vertices, edges) {
  let nextNodes = [];

  edges.forEach(edge => {
    if (edge[0] == currentNode) {
      vertices.forEach(vertex => {
        if (vertex.name == edge[1] && vertex.discovered == null) {
          nextNodes.push(vertex)
        }
      })
    } else if (edge[1] == currentNode) {
      vertices.forEach(vertex => {
        if (vertex.name == edge[0] && vertex.discovered == null) {
          nextNodes.push(vertex)
        }
      })
    }
  })
  return nextNodes;
}
