n, m = map(int, input().split(" "))
basket = []

for i in range(1, n+1):
    basket.append(i)

for k in range(0, m):
    i, j = map(int, input().split(" "))
    i -= 1
    j -= 1
    while i < j:
        temp = basket[i]
        basket[i] = basket[j]
        i += 1
        basket[j] = temp
        j -= 1

print(*basket)


# n, m = map(int, input().split())
# basket = list(range(1, n+1))

# # 반복문 반복이면 이렇게 _사용해도 됨됨
# for _ in range(m):
#     i, j = map(int, input().split())
#     basket[i-1:j] = basket[i-1:j][::-1]  # 리스트 슬라이싱을 이용해 부분 리스트 뒤집기

# print(*basket)
