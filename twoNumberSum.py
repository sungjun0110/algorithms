# input = [1,4,6,2,-1,5], 5
# output = [1,4]

# O(n) time, O(n) space
def twoNumberSum(array, targetSum):
  if len(array) == 0:
    return []
  ret = [None] * 2
  for i in range(len(array)):
    n = array[i]
    tmp = array
    tmp[i] = None
    if (targetSum - n) in tmp:
      ret[0], ret[1] = n, targetSum - n
      return sorted(ret)
  return []
