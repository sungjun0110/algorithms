'''
input: 6 [1,5,10]
output: 2 (1 x 1 , 1 x 5)
'''

#O(nd) time, O(n) space
def minNumberOfCoinsForChange(n, denoms):
  denoms.sort()
  coin_counts = [0] * (n+1)
  for denom in denoms:
    for amount in range(n+1):
      if denom > amount:
        continue
      if amount % denom == 0:
        coin_counts[amount] = amount//denom
      elif coin_counts[amount % denom] <= 0:
        if coin_counts[amount] > 0:
          continue
        coin_counts[amount] = -1
      else:
        coin_counts[amount] = min(coin_counts[amount],amount//denom + coin_counts[amount % denom])
	
  return coin_counts[n]
	    
