def first(word):
	return word[0]
words = ['in' , 'my' , 'humble' , 'opinion']
acro = list(map(first,words))
print(acro)

acron = ''
acron = acron.join(list(map(first,words)))
print(acron)

