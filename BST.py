class BST:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

  def insert(self, value):
    cursor = self
		
    while True:
      if value < cursor.value:
        if cursor.left is not None:
          cursor = cursor.left
        else:
          cursor.left = BST(value)
          break
					
      else:
        if cursor.right is not None:
          cursor = cursor.right
        else:
          cursor.right = BST(value)
          break
        
    return self


  def contains(self, value):
    if self.value == value:
      return True
		
    if value < self.value and self.left is not None:
      return self.left.contains(value)
    elif value >= self.value and self.right is not None:
      return self.right.contains(value)
		
    return False

    
  def remove(self, value):
    cursor = self

    while cursor is not None:
      if cursor.value == value:
        break
      if value < cursor.value:
        cursor = cursor.left
      elif value > cursor.value:
        cursor = cursor.right

    if cursor is None:
      return self

    cursorToRemove = cursor
    cursor_prev = cursor
		
    if cursor.right is None and cursor.left is not None:
      cursor = cursor.left
      if cursor.right is None:
        cursorToRemove.value = cursor.value
        cursor_prev.left = cursor.left
      else:
        while cursor.right is not None:
          cursor_prev = cursor
          cursor = cursor.right
        cursor_prev.right = cursor.left
        cursorToRemove.value = cursor.value
        cursor.left = None
        cursor.right = None
				
    else:
      cursor = cursor.right
      while cursor.left is not None:
        cursor_prev = cursor
        cursor = cursor.left
      cursor_prev.left = cursor.right
      cursorToRemove.value = cursor.value
      cursor.left = None
      cursor.right = None
		
    return self
