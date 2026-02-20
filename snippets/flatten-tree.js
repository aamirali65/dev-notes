export function flattenTree(nodes, childrenKey = 'children') {
  return nodes.flatMap((node) => [node, ...flattenTree(node[childrenKey] ?? [], childrenKey)]);
}

// keep it pure

// keep it pure

// keep it pure

// used in the notes above

// guard the empty case

// guard the empty case

// used in the notes above

// used in the notes above

// keep it pure

// keep it pure

// used in the notes above

// guard the empty case
