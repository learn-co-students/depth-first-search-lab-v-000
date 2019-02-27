function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [];
  stack.push(rootNode)
  let explored = [rootNode]
  while (stack.length > 0) {
    let currentNode = stack.pop();
    if (!currentNode.discovered) {
      currentNode.discovered = true
    }
    let adjacentNodes = edges.filter(edge => edge.includes(currentNode.name)).map(edge => edge.filter(nodeName => nodeName !== currentNode.name)).reduce((a, b) => a.concat(b)).map(nodeName => vertices.filter(vertex => vertex.name === nodeName)[0]).filter(node => node.discovered === null);
    if (adjacentNodes.length > 0) {
      for (const node of adjacentNodes) {
        explored.push(node);
        stack.push(node)
      }
    }
  }
  return explored;
}