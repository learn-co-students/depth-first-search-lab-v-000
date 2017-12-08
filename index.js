function depthFirstSearch(rootNode, vertices, edges) {
  const queue = [];
  const visited = [];
  queue.push(rootNode);
  visited.push(rootNode);
  let node;
  let adjacentNodes;
  while (!!queue.length) {
    node = queue.pop();
    if (!node.discovered) {
      node.discovered = true;
      adjacentNodes = findAdjacent(node.name, vertices, edges);
      adjacentNodes.forEach(adjNode => {
        queue.push(adjNode);
        visited.push(adjNode);
      });
    }
  }
  return visited.filter((v, index) => visited.indexOf(v) === index);
}

function findAdjacent(vertex, vertices, edges) {
  const vertexEdges = edges.filter(arr => arr.includes(vertex));
  const adjacentVertices = vertexEdges.map(edge => edge.find(v => v != vertex));
  return vertices.filter(v => adjacentVertices.includes(v.name));
}
