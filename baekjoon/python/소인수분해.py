# n = int(input())

# if n == 1:
#   exit()

# prime_num = []

# # n까지의 소수찾기
# for i in range(1, n+1):
#     factors = []
#     for j in range(1, i+1):
#         if (i % j == 0):
#             factors.append(j)
#     if len(factors) == 2:
#         prime_num.append(i)

# i = 0

# while n > 1:
#     num = prime_num[i]
#     if n % num == 0:
#         print(num)
#         n //= num
#     elif n % num != 0:
#         i += 1


def sieve(n):
    is_prime = [True] * (n+1)
    is_prime[0], is_prime[1] = False, False
    for i in range(2, int(n ** 0.5) + 1):
        if (is_prime[i]):
            for j in range(i * i, n+1, i):
                is_prime[j] = False
    return [i for i, prime in enumerate(is_prime) if prime] 

n = int(input())

if n == 1:
    exit()

prime_nums = sieve(n)

for prime in prime_nums:
    while n % prime == 0:
        print(prime)
        n //= prime
    if n == 1:
        break