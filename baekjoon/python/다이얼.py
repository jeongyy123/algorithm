str_list = list(input())
total_time = 0

for i in str_list:
  if(i == "A" or i == "B" or i == "C"):
    total_time+=3
  elif (i == "D" or i == "E" or i == "F"):
    total_time+=4
  elif (i == "G" or i == "H" or i == "I"):
    total_time+=5
  elif (i == "J" or i == "K" or i == "L"):
    total_time+=6
  elif (i == "M" or i == "N" or i == "O"):
    total_time+=7
  elif (i == "P" or i == "Q" or i == "R" or i =="S"):
    total_time+=8
  elif (i == "T" or i == "U" or i == "V"):
    total_time+=9
  else:
    total_time+=10

print(total_time)