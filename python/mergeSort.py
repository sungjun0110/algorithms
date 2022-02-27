# O(nlog(n)) time, O(n)space
def mergeSort(array):
  if len(array) == 1:
    return array
  a = []
  b = []
  if len(array) > 1:
    a = mergeSort(array[:len(array)//2])
    b = mergeSort(array[len(array)//2:])
	
  cursor1 = 0
  cursor2 = 0
	
  sorted_array = []
	
  while cursor1 < len(a) and cursor2 < len(b):
    min = None
    if a[cursor1] <= b[cursor2]:
      min = a[cursor1]
      cursor1 += 1
    else:
      min = b[cursor2]
      cursor2 += 1
    sorted_array.append(min)
	
  sorted_array += a[cursor1:] + b[cursor2:]
	
  return sorted_array
