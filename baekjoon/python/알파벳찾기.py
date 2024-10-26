str = input()
alphabet = []
result = []

for i in range(97, 123):
    alphabet.append(chr(i))

for i in alphabet:
    if (i in str):
        result.append(str.find(i))
    else:
        result.append(-1)

print(*result)


# 알파벳 리스트 만들기
import string
alphabet = [i for i in string.ascii_lowercase]
print(alphabet)