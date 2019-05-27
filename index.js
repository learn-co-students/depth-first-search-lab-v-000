// function depthFirstSearch(rootNode, vertices, edges) {
//     let s = new Stack
//     s.push(vertices)
//     while (s.isEmpty()) {
//         let vert = s.pop()
//         if (vert.discovered === false) {
//             vert.discovered = true
//         }
//     }
// }

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   push(el) {
//     this.data.unshift(el);
//     return el;
//   }
//   pop() {
//     return this.data.shift();
//   }

//   seeStack() {
//     console.log(this.data);
//   }

//   isEmpty() {
//     return this.data.length === 0;
//   }
// }

function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [];
  stack.push(rootNode);
  let visited = [rootNode];

  while (stack.length != 0) {
    // console.log(`first element in stack is ${stack[0].name}`)
    let v = stack.pop();
    if (!v.discovered) {
      v.discovered = true;

      findAdjacent(v.name, vertices, edges).forEach(function(node) {
        visited.push(node);
        stack.push(node);
      });
    }
  }
  return visited;
}

function findAdjacent(nodeName, vertices, edges) {
  return edges
    .filter(function(edge) {
      return edge.includes(nodeName);
    })
    .map(function(edge) {
      return edge.filter(function(node) {
        return node != nodeName;
      })[0];
    })
    .map(function(name) {
      return findNode(name, vertices);
    })
    .filter(function(node) {
      return !node.discovered;
    });
}

function findNode(nodeName, vertices) {
  return vertices.find(function(vertex) {
    return vertex.name == nodeName;
  });
}
