'''
Number of ways to make change

input= 6 [1,3]
output = 3 [1*3 + 3*1, 1*6, 3*2]
'''

# O(nd) time, O(1) space where d = denomonations
def numberOfWaysToMakeChange(n, denoms):
  results = [0] * (n+1)
  results[0] = 1
  for denom in denoms:
    for i in range(n+1):
      if denom <= i:
        results[i] += results[i-denom]
  return results[n]
