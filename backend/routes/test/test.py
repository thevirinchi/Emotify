import random

num = random.randint(0,7)
emo = ""

if num == 1:
	emo = "c1"
elif num == 2:
	emo = "c2"
elif num == 3:
	emo = "c3"
elif num == 4:
	emo = "c4"
else:
	emo = "c5"

print (emo)