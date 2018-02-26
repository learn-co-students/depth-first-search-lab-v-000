function depthFirstSearch(rootNode, vertices, edges){
    let visited = [];
    let stack = [rootNode];
    while (stack.length > 0) {
        let currentNode = stack.pop();
        currentNode.discovered = true;
        visited.push(currentNode);
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
        adjacentNodes = adjacentNodes.reverse();
        stack = stack.concat(adjacentNodes);
    };
    console.log("Visited: ", visited)
    return visited;
}

function findAdjacent(nodeName, vertices, edges) {
    const connectedEdges = edges.filter(edge => edge.includes(nodeName));
    const flattenedConnectedEdges = [].concat.apply([], connectedEdges);
    const adjacentNames = flattenedConnectedEdges.filter(name => name !== nodeName);
    let adjacentVertices = [];
    adjacentNames.forEach(function(name) {
      adjacentVertices.push(...vertices.filter(vertice => (vertice.name === name && vertice.discovered === null)))
    })
    return adjacentVertices;
}