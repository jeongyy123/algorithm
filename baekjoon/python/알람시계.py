hour, minute = map(int, input().split(" "))

if(0<= hour <= 23 and 0 <= minute <= 59) :
  if(minute >= 45) :
    print(hour, minute-45)
  elif(minute <= 45):
    if(hour == 0):
      print(23, minute+60-45)
    else:
      print(hour-1, minute+60-45)