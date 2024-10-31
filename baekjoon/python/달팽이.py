import math 
day, night, v = map(int, input().split(" "))
days_taken = math.ceil((v-night) / (day - night))

print(days_taken)
