function depthFirstSearch(root, vertices, edges){
    let stack = [root]
    const visited = []
    while(stack.length > 0){
        const nextNode = stack.pop()
        if(!visited.find(node => node.name === nextNode.name)){
            stack = stack.concat(neighbors(nextNode, vertices, edges))
            console.log(stack)
            visited.push(nextNode)
        }
    }
    return visited
}


function neighbors(node, vertices, edges){
    return edges.filter(pair => pair.includes(node.name))
        .map(pair => vertices.find( v => pair.filter(p => p !== node.name)[0] === v.name ))
}