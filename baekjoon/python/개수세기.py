import sys
n = int(input())

num_list = list(map(int, sys.stdin.readline().split(" ")))

v = int(input())

count = 0

for i in range(0, n):
  if (num_list[i] == v):
    count+=1

print(count)