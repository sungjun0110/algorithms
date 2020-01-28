'''
input: [3,2,1,5,2,8]
output: [1,2,2,3,5,8]
'''

# worst O(n^2) time, O(1) space
def insertionSort(array):
  for i in range(1, len(array)):
    for j in range(i):
      if array[i] < array[j]:
        array[j], array[j+1:i+1] = array[i], array[j:i]
        break
  return array
