'''
input: "ababa"
output: True
'''

# O(n) time, O(1) space
def isPalindrome(string):
  for i in range(len(string)//2):
    if string[i] != string[-i-1]:
      return False			
  return True
