def check_count(list):
    result = ""
    for i in list:
        if list.count(i) == 1:
            result += f'{i}'
    return result

x_list = []
y_list = []

for _ in range(3):
    x, y = map(int, input().split())
    x_list.append(x)
    y_list.append(y)

print(check_count(x_list), check_count(y_list))
