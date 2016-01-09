#explode( 'hello'  ) -> 'h e l l o'
def explode(word):
	if len(word) == 1 :
		return word
	else:
		return word[0] + ' '  + explode(word[1:])
print(explode("hello"))	
