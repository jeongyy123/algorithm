n = int(input())

result = 0

num_list = map(int, input().split())

for i in num_list:
    factors = []

    for k in range(1, i+1):
        if (i % k == 0):
            factors.append(k)
    if len(factors) == 2:
        result += 1

print(result)
