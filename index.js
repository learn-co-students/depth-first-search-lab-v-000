function depthFirstSearch(rootNode, vertices, edges){
    let stack = []
    stack.push(rootNode)
    let visited = [rootNode]

    while(stack.length != 0){
        // console.log(`first element in stack is ${stack[0].name}`)
        let v = stack.pop()
        if(!v.discovered){
            v.discovered = true

            findAdjacent(v.name, vertices, edges).forEach(function(node){
                visited.push(node)
                stack.push(node)
            })
        }
    }
    return visited;
}

function findAdjacent(node, vertices, edges) {
    let adjacentNodes = []
    for (let i = 0; i < edges.length; i++) {
        if (edges[i][0] === node) {
            for (let j = 0; j < vertices.length; j++) {
                if (vertices[j].name === edges[i][1] && vertices[j].discovered === null) {
                    adjacentNodes.push(vertices[j])
                }
            } 
        } else if (edges[i][1] === node) {
            for (let j = 0; j < vertices.length; j++) {
                if (vertices[j].name === edges[i][0] && vertices[j].discovered === null) {
                    adjacentNodes.push(vertices[j])
                }
            } 
        }
    }
    return adjacentNodes
}