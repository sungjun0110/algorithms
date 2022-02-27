'''
input: [3,4,-7,5,6,20,-1,9]
output: 39 (5+6+20+(-1)+9)
'''

# O(n) time, O(1) space
def kadanesAlgorithm(array):
  sum = array[0]
  biggest_sum = array[0]
  for i in range(1, len(array)):
    sum = max(array[i], sum + array[i])
    biggest_sum = max(biggest_sum, sum)
  return biggest_sum
