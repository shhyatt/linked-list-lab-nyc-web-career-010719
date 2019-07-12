function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node) {
  let nextAddress = node[1]
  return node[nextAddress]
  
}