function depthFirstSearch (start, vertices, edges) {
  var outArray = [];
  var stack = [];
  stack.push(start);
  outArray.push(start);
  while(stack.length > 0){
    var current = stack.pop();
    if(!current.discovered){
      current.discovered = true;

      edges.forEach((edge) => {
        if(edge[0] === current.name){
          var vert = vertices.find((vertex) => vertex.name === edge[1]);
          if (!vert.discovered) outArray.push(vert);
          stack.push(vert);
        }
        else if (edge[1] === current.name) {
          var vert = vertices.find((vertex) => vertex.name === edge[0]);
          if (!vert.discovered) outArray.push(vert);
          stack.push(vert);
        }
      })
    }
  }
  return outArray;
}
