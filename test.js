/**
 *
 */
class Route {
  V1;
  V2;
  D;
  HD;
}
let routes = [];

/**
 *
 */
class Nodee {
  name;
  next = [];
  cost;
  start;
}
/**
 *  input: first_line: string, n_records: number, second_line: string
 *  vars: V1, V2, VD, VA : string, D, HD,
 *  output: arrival:
 */

function solve(input) {
  let n_records;
  let VD, VA;
  let H;
  //first line
  //second line

  for (let i = 0; i < n_records; i++) {
    //read the line and assign it to the route object
  }
}

/**
 * loop the routes array to contruct the nodes graph
 * node => node
 *      => node
 */
let lists = [[Nodee]];

/**
 * []
 * [start, node,]
 */

let trajs = [[]];
let starters = [];
for (let start of starters) {
  let array = [Nodee];

  array.push(start);

  let node_v2 = start.next;

  array.push(node_v2);

  if (node_v2.length == 1) {
    node_v2 = start.next;
    array.push(node_v2);
  } else
    for (let next of start.next) {
      node_v2 = next;
      let list = array;
      array.push(node_v2);
      trajs.push(list);
    }

  while (node_v2.name != "") {
    array.push(node_v2);
    node_v2 = node_v2.next;
  }
  trajs.push(array);
}
/**
 * calculate the trajectory of each one
 */