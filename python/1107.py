def fact(x):
	p = 1
	for x in range(1,x+1):
		p*=x
	return p
def rec(n):
	if n==1 :
		return 1
	return n*rec(n-1)
print("Enter a number:")
n = int(input())
#iterate
print( str(n) + "! equals " + str(fact(n))  )
#recursion
print( str(n) + "! equals " + str(rec(n))  )
