'''
input: 7
       10
      /  \
     5    13
    / \   / \
   1   6 11  16 
output: 6
'''

# worst: O(n) time, O(1) space
# average: O(log(n)) time, O(1) space
def findClosestValueInBst(tree, target):
  return findClosestValueInBstHelper(tree, target, float("inf"))


def findClosestValueInBstHelper(tree, target, closest):
  current = tree
  while current is not None:
    diff = abs(target - closest)
		
    if diff > abs(current.value-target):
      diff = abs(current.value-target)
      closest = current.value
		
    if abs(target - current.value) == 0:
      return current.value
	
    if target < current.value:
      current = current.left

    elif target > current.value:
      current = current.right
  
  return closest
