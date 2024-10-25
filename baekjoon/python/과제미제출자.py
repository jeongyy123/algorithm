students = []
unsummitted = []

for i in range (1, 31):
  students.append(i)

for i in range(0, 28):
  num = int(input())
  if(students.__contains__(num)):
    del students[students.index(num)]

for student in students:
  print(student)