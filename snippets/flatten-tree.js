export function flattenTree(nodes, childrenKey = 'children') {
  return nodes.flatMap((node) => [node, ...flattenTree(node[childrenKey] ?? [], childrenKey)]);
}
