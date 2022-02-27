class DoublyLinkedList:
  def __init__(self):
    self.head = None
    self.tail = None

  # O(1) time, O(1) space
  def setHead(self, node):
    if self.head is None:
      self.head = node
      self.tail = node
      return
    else:
      self.insertBefore(self.head, node)

  # O(1) time, O(1) space
  def setTail(self, node):
    if self.tail is None:
      self.setHead(node)
      return
    else:
      self.insertAfter(self.tail, node)

  # O(1) time, O(1) space
  def insertBefore(self, node, nodeToInsert):
    if nodeToInsert == self.head and nodeToInsert == self.tail:
      return
    self.remove(nodeToInsert)
    nodeToInsert.prev = node.prev
    nodeToInsert.next = node
    if node.prev is None:
      self.head = nodeToInsert
    else:
      node.prev.next = nodeToInsert
		node.prev = nodeToInsert

  # O(1) time, O(1) space
  def insertAfter(self, node, nodeToInsert):
    if nodeToInsert == self.head and nodeToInsert == self.tail:
      return
    self.remove(nodeToInsert)
    nodeToInsert.prev = node
    nodeToInsert.next = node.next
    if node.next is None:
      self.tail = nodeToInsert
    else:
      node.next.prev = nodeToInsert
    node.next = nodeToInsert

  # O(p) time, O(1) space. p = position
  def insertAtPosition(self, position, nodeToInsert):
    if position == 1:
      self.setHead(nodeToInsert)
      return
    current = self.head
    while current is not None:
      if position == 1:
        self.insertBefore(current, nodeToInsert)
        return
      current = current.next
      position -= 1
    self.setTail(nodeToInsert)

  # O(n) time, O(1) space
  def removeNodesWithValue(self, value):
    current = self.head
    while current is not None:
      nodeToRemove = current
      current = current.next
      if nodeToRemove.value == value:
        self.remove(nodeToRemove)

  # O(1) time, O(1) space
  def remove(self, node):
    if node == self.head:
      self.head = self.head.next
    if node == self.tail:
      self.tail = self.tail.prev
        
    if node.next is not None:
      node.next.prev = node.prev
    if node.prev is not None:
      node.prev.next = node.next
    node.prev = None
    node.next = None

  # O(n) time, O(1) space
  def containsNodeWithValue(self, value):
    current = self.head
    while current is not None:
      if current.value == value:
        return True
      current = current.next
    return False
