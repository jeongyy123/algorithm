import sys
n = int(input())

num_list = list(map(int, sys.stdin.readline().split(" ")))

print(min(num_list), max(num_list))
