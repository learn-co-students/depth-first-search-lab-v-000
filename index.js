function depthFirstSearch(rootNode, vertices, edges){
    let queue = []; 
    let visitedNodes = []; 
    rootNode.discovered = true; 
    queue.push(rootNode); 

    while(queue.length != 0){
        let currentNode = queue.pop(); 
        visitedNodes.push(currentNode); 
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges); 
        markDiscovered(currentNode, adjacentNodes)
        queue = queue.concat(adjacentNodes); 
    }

    return visitedNodes; 
}

function bfs(rootNode, vertices, edges){
    let queue = []; 
    let visitedNodes = []; 
    rootNode.distance = 0; 
    queue.push(rootNode); 

    while(queue.length > 0) {
        let firstNode = queue.shift(); 
        visitedNodes.push(firstNode); 
        let adjacentNodes = findAdjacent(firstNode.name, vertices, edges); 
        markDiscovered(firstNode, adjacentNodes)
        queue = queue.concat(adjacentNodes); 
    }    
    return visitedNodes; 
}


function findAdjacent(verticeName, vertices, edges){
    let adjacentNodes = []; 

    for(let i = 0; i < edges.length; i++){
        let currentEdge = edges[i];
        let verticeA = currentEdge[0]; 
        let verticeB = currentEdge[1]; 

        if(verticeA == verticeName){
            let adjacentVertixIndex = findVerticeIndexByName(verticeB, vertices); 
            if (isVerticeUndiscovered(vertices[adjacentVertixIndex])) {
                adjacentNodes.unshift(vertices[adjacentVertixIndex])
            }
        } else if(verticeB == verticeName){
            let adjacentVertixIndex = findVerticeIndexByName(verticeA, vertices); 
            if (isVerticeUndiscovered(vertices[adjacentVertixIndex])) {
                adjacentNodes.unshift(vertices[adjacentVertixIndex])
            }
        }
     }

    return adjacentNodes; 
}

function findVerticeIndexByName(name, vertices) {
    let index = 0
    while(vertices[index].name != name){
        index++
    }
    return index   
}

function isVerticeUndiscovered(vertix) {
    return !vertix.discovered; 
}

function markDiscovered(vertice, adjacentNodes){
    for(let i = 0; i < adjacentNodes.length; i++){
        adjacentNodes[i].discovered = true; 
     }
}