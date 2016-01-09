#numbers = range(1,10) 
#it = iter(numbers) 
#print(next(it))
import os
files = os.popen('dir *.py') 
fileit = iter(files)
print(next(fileit))
