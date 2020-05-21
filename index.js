function depthFirstSearch(rootNode, vertices, edges) {
  let visited = [rootNode]
  let nodeStack = [rootNode]

  while (nodeStack.length > 0) {
    let current = nodeStack.pop()
    let toPushArray

    if (!current.discovered) {
      current.discovered = true

      getAdjacentNodes(current, vertices, edges).forEach(x => {
        nodeStack.push(x)
        visited.push(x)
      })

    }
  }
  return visited
}

function getAdjacentNodes(current, vertices, edges) {
  let vertArray = []

  for (let i = 0; i < edges.length; i++) {
    if (current.name === edges[i][0]) {
        vertArray = vertArray.concat(vertices.filter(v => v.name === edges[i][1]).filter(n => n.discovered !== true))

    } else if (current.name === edges[i][1]) {
        vertArray = vertArray.concat(vertices.filter(v => v.name === edges[i][0]).filter(n => n.discovered !== true))
    }
  }

  return vertArray
}
