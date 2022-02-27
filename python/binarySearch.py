'''
binary search algorithm returning index of the target
input: [4,24,7,5,13,27], 7
output: 2
'''

# O(log(n)) time, O(1) space
def binarySearch(array, target, index = -1):
  if len(array) == 1:
    if target == array[0]:
      return index + 1
    elif target != array[0]:
      return -1
	
  elif len(array) > 1:
    if target == array[len(array)//2]:
      return index + 1 + len(array)//2

    # search left sub tree
    elif target < array[len(array)//2] and array[:(len(array)//2)-1] is not None:
      return binarySearch(array[:(len(array)//2)], target, index)

    # search right sub tree
    elif target > array[len(array)//2] and array[(len(array)//2)+1:] is not None:
      return binarySearch(array[(len(array)//2)+1:], target, index + len(array)//2 + 1)
		
  return index
