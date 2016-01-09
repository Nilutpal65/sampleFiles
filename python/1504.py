class Student:
	#fields - name , id , grades(list)
	grades = []
	def __init__(self,name,id):
		self.name = name
		self.id = id
	def addGrade(self,grade):
		self.grades.append(grade)
	def showGrades(self):
		grds =''
		for grade in self.grades:
			grds += str(grade)
		return grds
a = list(range(1,11))
nilut = Student('Nilutpal' , '12345')

#nilut.addGrade(54)
#nilut.addGrade(121)
#nilut.addGrade(2342)
nilut.addGrade(a)
print(nilut.showGrades())
