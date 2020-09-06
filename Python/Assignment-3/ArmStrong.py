upper = 702648265
lowers=1042000
for num in range (lowers, upper + 1):
    o= len (str(num))
    sum = 0
    temp = num
    while temp > 0:
        x = temp % 10
        sum += x ** o
        temp //= 10

    if num == sum:
        print("The first armstrong number is",num)
        break