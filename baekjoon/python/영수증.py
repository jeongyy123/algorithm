x = int(input())
n = int(input())

for i in range(0, n):
  price, quantity = map(int,input().split(" "))

  x -= (price * quantity)

if(x == 0):
  print("Yes")
else:
  print("No")