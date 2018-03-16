const depthFirstSearch = (rootNode, vertices, edges) => {
    //set root node distance to 0 as starting position
    rootNode.discovered = true;

    //add rootNode to stack and discoveredOrder list
    let stack = [rootNode];
    let discoverOrder = [rootNode];

    while (stack.length !== 0) {
        //set current node to first node in stack, and remove from stack array
        let currentNode = stack.pop();

        //find adjacentNodes to currentNode
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);

        //set distance for adjacent nodes from currentNode
        setAdjacentNodesToDiscovered(adjacentNodes);

        // add adjacent nodes to discoverOrder
        discoverOrder = [...discoverOrder, ...adjacentNodes];

        //add adjacentNodes to stack
        stack = [...stack, ...adjacentNodes];
    }

    return discoverOrder
}

const findAdjacent = (nodeName, vertices, edges) => {

    ///filter edges to include only those that contain nodeName
    const adjacentEdgeNames = edges.filter(edge =>
        edge.includes(nodeName)

        // map each returned edge, filtering out submitted nodename
    ).map(edge => edge
        .filter(edgeName => edgeName !== nodeName))

        //combine returned nested array of nodenames
        .reduce((a, b) => [...a, ...b])

    // filter vertices list against adjacentEdgeNames list, ignoring nodes already discovered and return nodes
    return vertices.filter(vertex => adjacentEdgeNames.includes(vertex.name) && vertex.discovered === null)
}



const setAdjacentNodesToDiscovered = adjacentNodes => {
    for (const adjacentNode of adjacentNodes) {
        adjacentNode.discovered = true;
    }
}