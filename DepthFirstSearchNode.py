'''
input:
    A
   /| \
  B H  C
 / \  / \
D  E F   G

output:
["A", "B", "D" ,"E", "H", "C", "F", "G"]
'''

class Node:
  def __init__(self, name):
    self.children = []
    self.name = name

  def addChild(self, name):
    self.children.append(Node(name))
    return self

  # O(v+e) time, O(e) space.  v = vertices , e = edges
  def depthFirstSearch(self, array):
    array.append(self.name)
    if len(self.children) > 0:
      for child in self.children:
        child.depthFirstSearch(array)
		
  return array
