#list comprehension
n = range(1,11)
for x in range(len(n)) :
	print(n[x])
even = [ x for x in n if x % 2 == 0  ]
print(even)
odd = [ x for x in range(1,11) if x % 2 == 1 ]
print(odd)
#-----------------------------
sen = "now is the time to party hard"
sent = sen.split(' ')
print(sent)
words = [ (x,len(x)) for x in sent ]
words.sort()
print(words)

