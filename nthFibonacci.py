def getNthFib(n):
  fib1 = 0
  fib2 = 1
  if n == 1:
    return fib1
  elif n == 2:
    return fib2
  else:
    for i in range(3, n+1):
      fib1, fib2 = fib2, fib1 + fib2
  return fib2
