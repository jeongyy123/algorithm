n, m = map(int, input().split(" "))

basket = []

for i in range(1, n+1):
    basket.append(i)

for l in range(0, m):
    i, j = map(int, input().split(" "))
    temp = basket[i-1]
    basket[i-1] = basket[j-1]
    basket[j-1] = temp

print(*basket)
