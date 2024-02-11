#    <----------Methode 1: ------------>


name = None

while not name:
    name = input("please enter your name : ")

print("hello " + name)

# <---------Methode 2: --------->

name = ""

while len(name) == 0:
    name = input("enter your name : ")

print("hello " + name)

