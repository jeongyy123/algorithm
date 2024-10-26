t = int(input())

for _ in range(t):
    p = ""
    r, s = input().split(" ")
    for i in s:
        p += i * int(r)
    print(p)

