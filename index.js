function depthFirstSearch(root, vertices, edges) {
  let stack = [root];
  let discovered = [root];

  while (stack.length > 0) {
    const vertex = stack.pop();
    if (!vertex.discovered) {
      vertex.discovered = true;
      const adjacentVertices = findAdjacent(vertex.name, vertices, edges);
      adjacentVertices.forEach(adjacentVertex => {
        stack.push(adjacentVertex);
        discovered.push(adjacentVertex);
      });
    }
  }

  return discovered;
}

function findAdjacent(name, vertices, edges) {
  return edges.filter(edge => (
    edge.includes(name)
  )).map(edge => (
    edge.filter(_name => (
      _name !== name
    )).pop()
  )).map(_name => (
    vertices.find(vertex => (
      vertex.name === _name
    ))
  )).filter(vertex => (
    !vertex.discovered
  ));
}
