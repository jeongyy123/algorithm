def check_factor_or_multiple(n1, n2):
    if n2 % n1 == 0:
        return "factor"
    elif n1 % n2 == 0:
        return "multiple"
    else:
        return "neither"

while True:
    n1, n2 = map(int, input().split())

    if (n1 == 0 or n2 == 0):
        break

    print(check_factor_or_multiple(n1, n2))
