'''
input: 
      10
     /  \
    5   15
   / \  / \
  2  6 13  16
  
output: True
'''

# O(n) time, O(d) space where d = the depth of the tree
def validateBst(tree, minVal = None, maxVal = None):
  if tree is None:
    return True
	
  #executes if tree is a root
  if maxVal is None and minVal is None: 
  if validateBst(tree.left, float('-inf'), tree.value) is False or validateBst(tree.right, tree.value, float('inf')) is False:
    return False
	
  else: 
    #executes if tree is not a root
    if tree.value >= minVal and tree.value < maxVal:
    if validateBst(tree.left, minVal, tree.value) is False:
      return False
    if validateBst(tree.right, tree.value, maxVal) is False:
      return False
    else:
      return False
  return True
