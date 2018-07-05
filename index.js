function findAdjacentVertices(vertexName, vertices, edges){
  // find names of adjacent nodes by searching through edges array
  let namesOfAdjacentVertices = []
  for (let edge of edges){
    if (vertexName === edge[0]){
      namesOfAdjacentVertices.push(edge[1])
    }
    else if (vertexName === edge[1]){
      namesOfAdjacentVertices.push(edge[0])
    }
  }

  // find adjacent nodes by cross-referencing vertices array against our array of adjacent node names
  let adjacentVertices = []
  let vertexNameIndex = -1
  for (let vertex of vertices){
    vertexNameIndex = namesOfAdjacentVertices.findIndex(function(el) { return el === vertex.name})
    if (-1 !== vertexNameIndex){
      adjacentVertices.push(vertex)
    }
  }

  // remove vertices that we have already visited & reverse order
  let unvisitedAdjacentVertices = []
  for (let adjacentVertex of adjacentVertices){
    if (null === adjacentVertex.discovered){
      unvisitedAdjacentVertices.unshift(adjacentVertex)
    }
  }

  return unvisitedAdjacentVertices
}

function depthFirstSearch(startVertex, vertices, edges){
  startVertex.discovered = true

  let visitedVertices = [startVertex]
  let exploredVertices = []
  let currentVertex
  let adjacentVertices = []

  while (0 !== visitedVertices.length){
    currentVertex = visitedVertices.pop()

    adjacentVertices = findAdjacentVertices(currentVertex.name, vertices, edges)

    for (let adjacentVertex of adjacentVertices){
      adjacentVertex.discovered = true
    }

    visitedVertices = visitedVertices.concat(adjacentVertices)

    exploredVertices.push(currentVertex)
  }

  return exploredVertices
}
