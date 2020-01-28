'''
input:
    1
   / \
  2   3
 / \ / \
5  6 7  8

output:
    1
   / \
  3   2
 / \ / \
8  7 6  5
'''

# O(n) time, O(d) space
def invertBinaryTree(tree):
  if tree is not None:
    tree.right, tree.left = tree.left, tree.right
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
