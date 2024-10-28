# 5달러 이하 갯수 최소
# 0.25 Quarter
# 0.10 Dime
# 0.05 Nickel
# 0.01 Penny

t = int(input())

for _ in range(t):
    change = [0, 0, 0, 0]
    c = int(input())

    change[0] = c // 25
    c = c % 25
    change[1] = c // 10
    c = c % 10
    change[2] = c // 5
    c = c % 5
    change[3] = c

    print(*change)
