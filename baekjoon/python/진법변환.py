import sys
input = sys.stdin.readline()

n, b = input.split(" ")
b = int(b)
arr = []

# n 리스트 만들기
for i in n:
    if '0' <= i <= '9':
        arr.append(int(i))
    else:
        arr.append(ord(i)-55)

# n을 b진법->10진법 계산
for i in range(len(arr)):
    exponent = len(arr) - 1 - i
    arr[i] = arr[i] * (b ** exponent)

sum = 0
for i in arr:
    sum += i

print(sum)

# 반례 10YZ 36
