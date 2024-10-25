rests = set()

for i in range(0, 10):
  num = int(input())
  rests.add(num % 42)
  
print(len(rests))