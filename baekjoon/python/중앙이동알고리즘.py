# 0   1    2    3     4     5
# 4 - 9 - 25 - 64 - 144 - 289
# 2   3    5   8?  12?    17? 

n = int(input())
l = 2
for _ in range(n):
  l = l + (l -1)

print(l*l)