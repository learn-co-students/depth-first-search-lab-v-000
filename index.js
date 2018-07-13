function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [];
  stack.push(rootNode);
  let discovered = [rootNode];
  while (stack.length !== 0) {
    let currentNode = stack.pop();
    if (!currentNode.discovered) {
      currentNode.discovered = true;
      findAdjacent(currentNode.name, vertices, edges).forEach(node => {
        discovered.push(node);
        stack.push(node);
      })
    }  
  }
  return discovered;
}

function findAdjacent(rootNode, vertices, edges) {
  let links = edges.filter(edge => edge.includes(rootNode));
  links = [].concat.apply([], links);
  let nodeNames = links.filter(p => p !== rootNode);
  let adjNodes = [];
  for (let i=0; i<nodeNames.length; i++) {
    let node = findNode(nodeNames[i], vertices);
    adjNodes.push(node);
  }
  return adjNodes.filter(node => node.discovered === null);
}

function findNode(nodeName, vertices) {
  for (let i=0; i<vertices.length; i++) {
    if (vertices[i].name === nodeName) {
      return vertices[i];
    }
  }

}