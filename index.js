function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode];
  let visited = [];

  while (stack.length > 0) {
    const currentNode = stack.pop();

    if (!currentNode.discovered) {
      visited.push(currentNode);
      currentNode.discovered = true;

      const adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
      stack = stack.concat(...adjacentNodes);
    }
  }

  return visited;
}


function findAdjacent(vertexName, vertices, edges) {
  const adjacentEdges = findEdges(vertexName, edges);
  const adjacentNodeNames = [].concat(adjacentEdges[0], adjacentEdges[1]).filter(e => e !== vertexName);

  return vertices.filter(v => {
    if (adjacentNodeNames.includes(v.name)) { return v };
  });
}

function findEdges(vertexName, edges) {
  return edges.filter(edge => {
    if (edge.includes(vertexName)) { return edge; }
  });
}
