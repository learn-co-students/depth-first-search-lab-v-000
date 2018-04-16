

function depthFirstSearch(rootNode, vertices, edges) {
  let stack = []
  let visited = []
  rootNode.discovered = true
  stack.unshift(rootNode) //adds to front of stack to set initial stack of rootNode
  while(!stack.length == 0) {
    let currentNode = stack.shift() //takes the first node in stack
    visited.push(currentNode)//pushes that current node into the visited array
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)//gets adjacent nodes
    //reverse the adjacentNodes
    for(let i = 0; i < adjacentNodes.length; i++) {
      adjacentNodes[i].discovered = true //changes the discovered value to true
    }
    stack = adjacentNodes.concat(stack)
    debugger
  }
  return visited
}

function findAdjacent(nodeName, vertices, edges) { //returns an array of adjacent nodes
  let adjacents = []
  for(let i = 0; i < edges.length; i++) {
    if(nodeName == edges[i][0]){
      let adjacentNodeName = edges[i][1]
      for(let i = 0; i < vertices.length; i++){
        if(vertices[i].name == adjacentNodeName && !vertices[i].discovered) {
          adjacents.push(vertices[i])
        }
      }
        // adjacents.push(adjacentNodeName)
    }else if(nodeName == edges[i][1]){
      let adjacentNodeName = edges[i][0]
      for(let i = 0; i < vertices.length; i++){
        if(vertices[i].name == adjacentNodeName && !vertices[i].discovered) {
          adjacents.push(vertices[i])
        }
      }
      // adjacents.push(adjacentNodeName)
    }
  }
  return adjacents
}
// for(let i = 0; i < vertices.length; i++){
//   if(vertices[i].name == adjacentNodeName && !vertices[i].discovered) {
//     adjacents.push(vertices[i])
//   }

// for(let i = 0; i < vertices.length; i++){
//   if(vertices[i].name == adjacentNodeName && !vertices[i].discovered) {
//     adjacents.push(vertices[i])
//   }
// }
