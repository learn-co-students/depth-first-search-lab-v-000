function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode]
  let orderedNodes = []
  while (stack.length) {
    let node = stack.pop()
    if (!node.discovered) {
      node.discovered = true
      orderedNodes.push(node)
    }
    for (let i = 0; i < edges.length; i++) {
      if (edges[i].includes(node.name)) {
        for (let j = 0; j < edges[i].length; j++) {
          if (edges[i][j] !== node.name) {
            for (let k = 0; k < vertices.length; k++) {
              if (vertices[k].name === edges[i][j] && !vertices[k].discovered) {
                vertices[k].discovered = true
                stack.push(vertices[k])
                orderedNodes.push(vertices[k])
              }
            }
          }
        }
      }
    }
  }
  return orderedNodes
}
