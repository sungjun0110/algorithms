'''
input: [1,4,-3,5,-2,-1,3], 0
output: [[-2,-1,4],[-3,-2,5],[-2,-1,3]]
'''

# O(n^2) time, O(n) space
def threeNumberSum(array, targetSum):
  triplets = []
  array.sort()
  for i in range(len(array)-2):
    for j in range(i+1, len(array)-1):
      if targetSum - (array[i]+array[j]) in array[j+1:]:
        triplets.append(sorted([array[i], array[j], targetSum - (array[i]+array[j])]))			
  return triplets
