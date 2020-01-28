'''

'''

def insertionSort(array):
  for i in range(1, len(array)):
    for j in range(i):
      if array[i] < array[j]:
        array[j], array[j+1:i+1] = array[i], array[j:i]
        break
  return array
