day, night, v = map(int, input().split(" "))
days_taken = 0

while v >= 0:
    days_taken += 1
    v -= day
    if (v == 0):
        break
    else:
        v -= night


print(days_taken)
