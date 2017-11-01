let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]
 
let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
  {name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
  {name: '23rd&Lex', discovered: null}
]


function depthFirstSearch(rootnode, vertices, edges){
    
    let stack = [rootnode]
    let visited = [rootnode]

    while(stack.length != 0){
      let currentNode = stack.pop()

      if (currentNode.discovered == null){

        currentNode.discovered = true;

        let adjacentNodes = adjacentEdges(currentNode.name, vertices, edges)

        adjacentNodes.forEach(function(node){
            stack.push(node);
            visited.push(node)
          })
      }  
    }
    return visited
}

function adjacentEdges(node, vertices, edges){
  let connectedEdges = edges.filter( edge => edge.includes(node));
  connectedEdges.forEach( edge => edge.splice(edge.indexOf(node), 1));

  let connectedVertices = []
  for( let i = 0; i < connectedEdges.length; i++){
    connectedVertices.push( vertices.find( v => v.name == connectedEdges[i] && v.discovered == null ))
  }

  return connectedVertices.filter( element => element != undefined );
}

