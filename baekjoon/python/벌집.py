n = int(input())

if n == 1:
  print(1)
  exit()

layer = 1
max_in_layer = 1

while max_in_layer < n:
  max_in_layer += 6 * layer
  layer += 1

print(layer)