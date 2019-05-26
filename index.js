function depthFirstSearch(rootNode,vertices, edges){
  let all= []
  let stack = []
  stack.push(rootNode)
  all.push(rootNode)
    while(stack.length > 0){
      let root = stack.pop()
      if(root.discovered) continue
        root.discovered = true
      findAdjacent(root.name,edges, vertices).map(edge=>{
        all.push(edge)
        stack.push(edge)
      })
  }
  return all
}

function findAdjacent(node, edges, vertices){
  let adjacent = edges.filter(edge=> edge.includes(node)).map(edge=> edge.filter(v=> v !=node)).map(v=>v[0])


  return vertices.filter(vertex=>{
    return adjacent.includes(vertex.name) && vertex.discovered === null
  })
}
