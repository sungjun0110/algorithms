'''
input: [3,2,1,5,2,8]
output: [1,2,2,3,5,8]
'''

# worst O(n^2) time, O(1) space
def bubbleSort(array):
  is_sorted = False
  counter = 0
  while(not is_sorted):
    is_sorted = True
    for i in range(len(array)-1-counter):
      if array[i] > array[i+1]:			    
        array[i], array[i+1] = array[i+1], array[i]
        is_sorted = False
    counter += 1
  return array
