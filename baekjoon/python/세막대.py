num_list = list(map(int, input().split()))

print(num_list)

num_list_without_max = num_list.remove(max(num_list))

print(num_list_without_max)