
function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode]
  let visited = []
  visited.push(rootNode)
  while (stack.length > 0) {
    let node = stack.pop();
      if (node.discovered) continue;
        node.discovered = true;
        let adjacent = findAdjacent(node.name, vertices, edges)
        adjacent.map(vertex => {visited.push(vertex); stack.push(vertex);
        });
        }
  return visited
}

function findAdjacent(name, vertices, edges) {
  let adjacent = edges.filter(edge => edge.includes(name))
                    .map(edge => edge.filter(v => v != name))
                    .map(v => v[0]);

  return vertices.filter(vertex =>
                              adjacent.includes(vertex.name) &&
                              vertex.discovered === null);
}
