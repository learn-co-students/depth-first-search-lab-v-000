function depthFirstSearch (rootNode, vertices, edges) {
  let stack = [];
  let visited = [];
  rootNode = vertices[0];

  stack.push(rootNode); // add rootNode to stack

  while (stack.length !== 0) {

    let firstNode = stack.pop();

    if (!firstNode.discovered) {
      firstNode.discovered = true;
      visited.push(firstNode);

      let adjacentNodes = findAdjacentNodes(firstNode.name, vertices, edges);

      let i = adjacentNodes.length - 1; //last index in array

      while (i >= 0) {
        stack.push(adjacentNodes[i]);
        i--;
      }
    }
  }

  return visited;
}

function findAdjacentNodes(name, vertices, edges) {
  let adjacents = [];

  for (let edge of edges) {
    if (edge[0] === name) {
      let node = vertices.find(vertex => vertex.name === edge[1])

      if (!node.discovered) {
        adjacents.push(node);
      }

    } else if (edge[1] === name) {
      let node = vertices.find(vertex => vertex.name === edge[0])
      if (!node.discovered) {
        adjacents.push(node);
      }
    }
  }

  return adjacents;
}
