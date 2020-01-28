'''
input: [4,3,1,5,8,2]
output: [1,2,3,4,5,8]
'''

# O(n^2) time, O(1) space
def selectionSort(array):
  for i in range(len(array)-1):
    s_index = i
    for j in range(i+1, len(array)):
      if array[s_index] > array[j]:
        s_index = j
    array[i], array[s_index] = array[s_index], array[i]
		
  return array
