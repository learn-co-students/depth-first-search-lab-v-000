function depthFirstSearch(edges, vertices) {
    let results = [];
    let list = [];

    list.push(vertices[0])

    while (list.length !== 0) {
        let root = list.pop()

        if (!root.discovered) {
            results.push(root);
            root.discovered = true;
            for (let i = 0; i < edges.length; i++) {
                let e = edges[i]

                if (e[0] === root.name) {
                    for (let n = 0; n < vertices.length; n++) {
                        if (vertices[n].name === e[0] && !vertices[n].discovered) {
                            list.push(vertices[n])
                        }
                    }
                }
                if (e[1] === root.name) {
                    for (let n = 0; n < vertices.length; n++) {
                        if (vertices[n].name === e[1] && !vertices[n].discovered) {
                            list.push(vertices[n])
                        }
                    }
                }
            }
        }
    }
    return vertices
}

let edgesArray = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let verticesArray = [
    { name: '34th&6th', discovered: null },
    { name: '23rd&6th', discovered: null },
    { name: '14th&6th', discovered: null },
    { name: '28th&Bwy', discovered: null },
    { name: '23rd&Bwy', discovered: null },
    { name: '14th&Lex', discovered: null },
    { name: '23rd&Lex', discovered: null }
]

let v = depthFirstSearch(edgesArray, verticesArray)

v.forEach((n) => {
    console.log(n.name)
})