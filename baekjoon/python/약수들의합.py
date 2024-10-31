def check_complete_number(list, n):
    sum = 0
    for i in list:
        sum += i

    return n == sum

while True:
    n = int(input())

    if (n == -1):
        break

    factors = []
    result = ""

    for i in range(1, n):
        if (n % i == 0):
            factors.append(i)


    if (check_complete_number(factors, n)):
        result += f'{n} ='
        for i in range(len(factors)):
            if (i == 0):
                result += f' {factors[i]}'
            else:
                result += f' + {factors[i]}'
    else:
        result = f'{n} is NOT perfect.'

    print(result)
