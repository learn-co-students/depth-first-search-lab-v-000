function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [];
  stack.push(rootNode);
  let visited = [rootNode];

  while (!stack.length == 0) {
    let currentNode = stack.pop();

    if (!currentNode.discovered) {
      currentNode.discovered = true;

      let adjacentNodes = findAdjacentNodes(currentNode.name, vertices, edges);

      adjacentNodes.forEach(node => {
        stack.push(node);
        visited.push(node);
      })
    }
  }

  return visited;
}

function findAdjacentNodes(nodeName, vertices, edges) {
  let adjacentNodes = [];

  for (let edge of edges) {
    if (edge[0] === nodeName) {
      for (let vertex of vertices) {
        if (vertex.name === edge[1] && vertex.discovered === null) {
          adjacentNodes.push(vertex);
        }
      }
    } else if (edge[1] === nodeName) {
      for (let vertex of vertices) {
        if (vertex.name === edge[0] && vertex.discovered === null) {
          adjacentNodes.push(vertex);
        }
      }
    }
  }

	return adjacentNodes;
}
