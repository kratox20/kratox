#    <----------Methode 1: ------------>


name = input("enter your name : ")

while not name:
    name = print(input("please enter your name : "))

print("hello " + name)

# <---------Methode 2: --------->

name = ""

while len(name) == 0:
    name = input("enter your name : ")

print("hello " + name)

