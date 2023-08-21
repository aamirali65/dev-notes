export function flattenTree(nodes, childrenKey = 'children') {
  return nodes.flatMap((node) => [node, ...flattenTree(node[childrenKey] ?? [], childrenKey)]);
}

// keep it pure

// keep it pure

// keep it pure

// used in the notes above
