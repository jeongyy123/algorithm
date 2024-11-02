while True:
    a, b, c = map(int, input().split())

    if a + b + c == 0:
        exit()

    if max(a, b, c) < (a+b+c-max(a, b, c)):
        if a == b and b == c:
            print("Equilateral ")
        elif a == b or b == c or a == c:
            print("Isosceles ")
        elif a != b and a != c and b != c:
            print("Scalene ")
        else:
          print("Invalid")
    else:
        print("Invalid")
