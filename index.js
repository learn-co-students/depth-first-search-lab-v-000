function depthFirstSearch(rN, vertices, edges){
  let order = [rN]
  let stack = [rN]
  while (stack.length > 0){
    let curr = stack.pop()
    curr.discovered = true

    for (let e of edges){
      if (e.includes(curr.name)){
        let next = e[0]===curr.name ? e[1] : e[0]
        for (let v of vertices){
          if (v.name === next && !v.discovered){
            stack.push(v)
            order.push(v)
          }
        }
      }
    }
  }
  return order

}
