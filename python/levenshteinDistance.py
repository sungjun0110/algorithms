'''
input: "abc", "abde"
output: 2, (add "e" and sustitue "c" for "d"
'''

#O(nm) time, O(nm) space
def levenshteinDistance(str1, str2):
  list1 = [''] + [c for c in str1]
  list2 = [''] + [c for c in str2]
	
  matrix = [[None]*len(list2) for i in range(len(list1))]
	
  for n in range(len(list1)):
    matrix[n][0] = n
  for m in range(len(list2)):
    matrix[0][m] = m
	
  for i in range(1, len(list1)):
    for j in range(1, len(list2)):
      if list1[i] == list2[j]:
        matrix[i][j] = matrix[i-1][j-1]
      else:
        matrix[i][j] = min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]) + 1
	
  return matrix[len(list1)-1][len(list2)-1]
