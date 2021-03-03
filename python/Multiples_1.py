'''

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


* Si listamos todos los número naturales por debajo de 10 que son multiplo sde 3 o 5,  tenemos 3,5,6,9
La suma de esos multiplos es 23, encontrar la suma de todos los multiplos por debajo de 1000

'''

multiples =[]
for x in range(1001):
    if x%3 == 0 or x%5 ==0:
        multiples.append(x)

suma = sum(multiples)
print(suma)


'''
Como una estructura comprimida

'''

ans = sum(x for x in range(1001) if(x%3 == 0 or x%5 ==0))
print(ans)

