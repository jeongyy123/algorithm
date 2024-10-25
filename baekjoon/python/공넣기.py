n, m = map(int, input().split(" "))
basket = []

for i in range(1, n+1):
    basket.append(0)

for i in range(0, m):
    i, j, k = map(int, input().split(" "))
    for l in range(i-1, j):
        basket[l] = k

print(*basket)
