import functools
def sum(x,y):
	return x+y
numbers = list(range(1,11))
sum = functools.reduce(sum,numbers)
print(sum)
