function depthFirstSearch(startNode, vertices, edges){
  let visited = [startNode]
  let stack = [startNode]
  while(stack.length != 0){
    let firstNode = stack.pop()
    if (!firstNode.discovered){
      firstNode.discovered = true
      let adjacent = findAdjacent(firstNode.name, vertices, edges)
      adjacent.forEach(v => {stack.push(v)
        visited.push(v)})

    }
  }
  return visited
}

function findAdjacent(nodeName, vertices, edges){
  let myEdges = edges.filter(e => e.includes(nodeName))
  let vertNames = myEdges.map(e => e.filter(v => v !== nodeName)[0])
  let verts = vertNames.map(v => vertices.filter(vert => vert.name === v)[0])

  return verts.filter(v => v.discovered === null)
}
