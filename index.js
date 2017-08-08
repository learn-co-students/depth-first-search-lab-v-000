function depthFirstSearch(rootNode, vertices, edges) {
  let stack = []
  let output = []
  stack.push(rootNode)
  while (stack.length) {
    let vertex = stack.pop()
    if (!vertex.discovered) {
      vertex.discovered = true
      output.push(vertex)
    }
    for (let i in edges) {
      if (edges[i].includes(vertex.name)) {
        for (let j in edges[i]) {
          if (edges[i][j] !== vertex.name) {
            for (let k in vertices) {
              if (vertices[k].name === edges[i][j] && vertices[k].discovered !== true) {
                if (!vertices[k].discovered) {
                  vertices[k].discovered = true
                }
                stack.push(vertices[k])
                output.push(vertices[k])
              }
            }
          }
        }
      }
    }
  }
  return output
}
