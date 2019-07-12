function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  let nextAddress = node.next
  return collection[nextAddress]
}

function nodeAt(index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection)
  for(let i = 0; i < index; i++){
    currentNode = next(currentNode, collection)
  }
  return currentNode
  
  
}