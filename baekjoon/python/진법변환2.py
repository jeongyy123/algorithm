import sys
input = sys.stdin.readline

n, b = map(int, input().split(" "))
arr = []

# n -> b진법으로 변경
#1. n을 b로 나눈 나머지 합치기(str)
remainder = []

while (n > 0):
  remainder.append(n % b)
  n = (n // b)

answer =''
for i in remainder:
  if 0 <= i <= 9:
    answer += str(i)
  else:
    answer += chr(i+55)

print(answer[::-1])
    

# 47915 36 => 10YZ 36
