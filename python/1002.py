file = open('1002.txt')
grades = file.readlines()
print(grades)
grades = [ x.rstrip() for x in grades  ]
print(grades)		
