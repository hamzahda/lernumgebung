


var HD, VD, VA, pth, counter = 0

var validpths = []
var nodes = []

class Nodee {

    constructor(name) {
        this.name = name;
        this.childs = [];
    }

    add(next) {
        this.childs.find(node => node.name == next.name) == undefined ? this.childs.push(next) : {}
    }
}
class Edge {
    constructor(v1, v2, start, cost) {
        this.v1 = v1;
        this.v2 = v2;
        this.start = start
        this.cost = cost
    }
}
function clone(A) {
    return JSON.parse(JSON.stringify(A));
}
function traverse(node, pth) {
    counter++
    if (node === undefined) {
        node = nodes[0]
    }
    if (pth === undefined) {
        pth = [];
    }
    pth.push(node.name);
    //console.log("Current pth", pth);
    if (node.name == VA) {
        //console.log("Found Valid", pth);
        validpths.push(clone(pth));
        return;
    }





    node.childs.forEach((x) => {
        if (pth.indexOf(x.name) === -1) {
            var newpth = clone(pth);
            traverse(x, newpth);
        }
    })
}































































process.stdin.once('data',
    (chunk) => {
        let chunks = chunk.toString().split('\n')
        let line = chunks[0].split(";")
        HD = line[0]
        VD = line[1]
        VA = line[2]
        let n = chunks[1]
        for (let i = 2; i < chunks.length - 1; i++) {
            line = chunks[i].split(";")
            let check = nodes.find(node => node.name == line[1])
            if (check == undefined) {
                nodes.push(new Nodee(line[1]))
            }
        }
        nodes.push(new Nodee(VA))

        for (let node of nodes) {
            for (let i = 2; i < chunks.length - 1; i++) {
                line = chunks[i].split(";")
                if (node.name == line[1]) {
                    nodee = nodes.find(node => node.name == line[2])
                    node.add(nodee)
                } else {
                }
            }
        }

        traverse(nodes[0], pth)
        let edges = []
        for (let valid of validpths) {
            for (let i = 0; i < valid.length; i++) {
                if (valid[i] != VA) {
                    console.log(valid[i], valid[i + 1]);
                    for (let j = 2; j < chunks.length - 1; j++) {
                        line = chunks[j].split(";")
                        let e = edges.find(edge => { edge.v1 == valid[i] && edge.v2 == valid[i + 1] })
                        if (e == undefined) {
                            if (valid[i] == line[1] && valid[i + 1] == line[2]) {
                                edges.push(new Edge(line[1], line[2], line[0], line[3]))
                            }
                        }
                    }
                }
            }
        }


        var se = 0
        var s = 0
        var val = 0
        for (let i = 0; i < validpths.length; i++) {
            s = s + validpths[i].length - 1

            while (se < s) {
                console.log(new Date(dges[se].start));
                console.log(new Intl.DateTimeFormat('fr-FR', {
                    hour: 'numeric',
                    minute: 'numeric',
                  }).format(date))
                var cost = Number.parseInt(edges[se].start) + Number.parseInt(edges[se].cost)
                var costt = edges[se].v1 == VD ? edges[se].start - HD : Number.parseInt(edges[se].start) - Number.parseInt(edges[se - 1].start) + Number.parseInt(edges[se - 1].cost)
                val = val + cost + costt

                se++
            }
            console.log(val);

        }

    })


