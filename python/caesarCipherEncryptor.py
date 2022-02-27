'''
input: "zab", 3
output: "cde"
'''

# O(n) time, O(n) space
def caesarCipherEncryptor(string, key):
  new_string = ''
  key = key % 26
  for c in string:
    if ord(c) + key < ord('a') + 26:
      new_string += chr(ord(c)+key)
    else:
      new_string += chr(ord(c)+key-26)
  return new_string
