'''
input: [3,1,[2,[4,-1],2],5]
output: 3+1+2(2+3(4-1)+2)+5 = 35
'''

# O(n) time, O(d) space where d=depth
def productSum(array, depth = 1):
  sum = 0
  for value in array:
    if isinstance(value, list):
      sum += productSum(value, depth+1)
    else:
      sum += value
  return sum*depth
