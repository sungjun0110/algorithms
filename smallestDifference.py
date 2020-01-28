'''
input: [1,2,3,4,5], [6,7,8,9,10]
output: [5,6]
'''

# O(nlog(n) + mlog(m)) time, O(1) space
def smallestDifference(arrayOne, arrayTwo):

  arrayOne.sort()
  arrayTwo.sort()
	
  abs_diff = None
  value_list = []
	
  one_cursor = 0
  two_cursor = 0

  while one_cursor < len(arrayOne) or two_cursor < len(arrayTwo):
	
    i, j  = arrayOne[one_cursor], arrayTwo[two_cursor]
		
    if abs_diff is None or abs_diff > abs(i-j):
      abs_diff = abs(i-j)
      value_list = [i,j]
			
    if i < j and one_cursor < len(arrayOne)-1:
      one_cursor += 1
    elif i > j and two_cursor < len(arrayTwo)-1:
      two_cursor += 1
    else:
      return value_list
		    
  return value_list
