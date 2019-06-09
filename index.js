function depthFirstSearch(rootNode, vertices, edges) {
  rootNode.discovered = true;
  let stack = [rootNode];
  let stackOrder = [rootNode];
  while (stack.length != 0) {
    let currentNode = stack.pop();
    let adjacentNodes = findAdjacentNodes(currentNode.name, vertices, edges);
    stackOrder = stackOrder.concat(adjacentNodes)
    adjacentNodes.map(node => markDiscovered(node))
    stack = stack.concat(adjacentNodes);
  }
  return stackOrder;
}

function markDiscovered(node) {
  return node.discovered = true;
}

function findAdjacentNodes(rootNode, vertices, edges) {
  let endPoints;
  let filteredEdges = [];
  let adjacentNodes = [];

  edges.forEach(edge => {
    edge.forEach(e => e === rootNode ? filteredEdges.push(edge) : null)
  })

  if (filteredEdges.length > 0) {
    if (filteredEdges.length == 1) {
      endPoints = [filteredEdges[0][0]];
    } else if (filteredEdges.length == 2) {
      endPoints = [filteredEdges[0][0], filteredEdges[1][1]];
    }
    endPoints.map(endPoint => {
      vertices.forEach(vertex => {vertex.name === endPoint? adjacentNodes.push(vertex): null})
    })
    return adjacentNodes.filter(adjacentNode => adjacentNode.discovered == null)
  } else {
    return adjacentNodes;
  }
}
