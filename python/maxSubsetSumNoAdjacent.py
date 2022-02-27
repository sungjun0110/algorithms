'''
maximum subset of sum with no adjacent elements
input: [5, 20, 15, 60, 50]
output: 80 (20+60) 
'''

# O(n) time, O(1) space
def maxSubsetSumNoAdjacent(array):
  if len(array) == 0:
    return 0
  elif len(array) == 1:
    return array[0]
  else:
    firstSum = array[0]
    secondSum = max(array[0], array[1])
    for i in range(2, len(array)):
      secondSum, firstSum = max(secondSum, firstSum+array[i]), secondSum
    return secondSum
