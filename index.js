function depthFirstSearch(rootNode, edges, vertices) {
  let visited = [];
  let stack = [];

  stack.push(rootNode);
  while (stack.length > 0) {
    let node = stack.pop();
    if(node.discovered) continue;

    visited.push(node);

    node.discovered = true;
    let adjacent = findAdjacent(node.name, edges, vertices);
    adjacent.map(node => stack.push(node));
  }

  return visited;
}

function findAdjacent(name, vertices, edges) {
  let adjacent = edges.filter(edge => edge.includes(name))
                    .map(edge => edge.filter(v => v != name)) //remove self
                    .map(v => v[0]); // flatten

  return vertices.filter(vertex => 
                              adjacent.includes(vertex.name) &&
                              vertex.discovered === null);
}