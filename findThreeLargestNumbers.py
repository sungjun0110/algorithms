'''
input: [23,1,-1,-,288,20,31]
output: [23,31,288]
'''

# O(n) time, O(1) space
def findThreeLargestNumbers(array):
    # Write your code here.
    if len(array) < 3:
	    return array
	
	largest = [None] * 3
	
	for e in array:
	    for i in range(2, -1, -1):
		    if largest[i] is None:
			    largest[i] = e
				break
			else:
			    if largest[i] < e:
				    for j in range(0, i):
					    largest[j] = largest[j+1]
					largest[i] = e
					break
				else:
				    continue
	
	return largest
