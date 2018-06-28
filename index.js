function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode];
  let visited = [];
  while (stack.length !== 0) {
    let currentNode = stack.shift();
    if (!currentNode.discovered) {
      visited.push(currentNode);
      currentNode.discovered = true;
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      adjacentNodes.forEach(vertex => {
        stack.unshift(vertex)
      })
    }
  }
  return visited
}

function findAdjacent(rootNode, vertices, edges) {
  let adjacentNames = [];
  let adjacentNodes = [];
  edges.forEach(edge => {
    if (edge[0] === rootNode) {
      adjacentNames.push(edge[1])
    } else if (edge[1] === rootNode) {
      adjacentNames.push(edge[0])
    }
  })
  adjacentNames.forEach(name => {
    vertices.forEach(vertex => {
      if (name === vertex.name) {
        adjacentNodes.unshift(vertex)
      }
    })
  })
  return adjacentNodes
}
