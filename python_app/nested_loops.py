
rows = int(input("how many rows do you have ?: "))
columns = int(input("how many columns do you have ?: "))
symbol = input("enter a symbol to use : ")


for i in range(rows):
    for j in range(columns):
        print(symbol, end="")
    print()