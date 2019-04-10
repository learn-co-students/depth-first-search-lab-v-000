function depthFirstSearch(rootNode, vertices, edges) {
  let visited = [rootNode];
  let queue = [rootNode];
  while (queue.length !== 0) {
    let currentNode = queue.pop();
    let adjacentNodes = findAdjacent(currentNode.name, vertices,edges);
    if (currentNode.discovered === null) {
      currentNode.discovered = "yes";
      for (let i = 0; i < adjacentNodes.length; i++) {
          if (adjacentNodes[i].discovered === null) {
            visited.push(adjacentNodes[i]);
          }
          queue.push(adjacentNodes[i]);
      }
      queue = queue.concat(adjacentNodes);
    }
  }
  return visited;
}

 function findAdjacent(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
    return node.distance == null;
  })
}

 function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}