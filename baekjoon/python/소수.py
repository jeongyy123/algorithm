from functools import reduce

m = int(input())
n = int(input())

prime_num = []

# m <= 범위 <= n 내 소수찾기
for i in range(m, n+1):
    factors = []
    for j in range(1, i+1):
        if (i % j == 0):
            factors.append(j)
    if len(factors) == 2:
        prime_num.append(i)

# 소수의 합, 최솟값
if len(prime_num):
    print(reduce(lambda acc, cur: acc + cur, prime_num))
    print(prime_num[0])
elif len(prime_num) == 0:
    print(-1)